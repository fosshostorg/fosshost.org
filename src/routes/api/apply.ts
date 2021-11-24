const axios = require("axios");
import { Message, SMTPClient } from "emailjs";
import escape from "validator/es/lib/escape";
import marked from "marked";
import { info } from "../../_utils";

let baseURL = "https://fosshost.org";

export async function post(req: any, res: any, next: () => void) {
  info(`Application received: ${req.body.project.name}`);

  const application = new Application(req.body);

  await application.createOSTicket();
  application.sendConfirmationEmail();

  res.end();
}

const headers = {
    security: {
        header: "Security Information",
        hasAcceptedCriteria: "Accepted eligibility criteria?",
        criteriaQuestionResponse: "Security questions response",
    },
    personal: {
        header: "Personal Information",
        name: "Name",
        email: "Email",
    },
    project: {
        header: "Project Information",
        name: "Name",
        description: "Description",
        role: "Applicant's role",
        site: "Site",
    },
    technical: {
        header: "Technical Information",
        services: "Selected services",
        "Domain Registration": {
            domain: "Requested domain"
        },
        "VPS": {
            info: "Information"
        },
        "Mirrors-as-a-service": {
            storage: "Storage",
            rsyncURL: "rsync URL",
            specialRequirements: "Special requirements?",
        },
    }
}

class Application {
  body: FormResponse;
  forEmail: boolean;

  client: SMTPClient = new SMTPClient({
    user: process.env.EMAIL,
    password: process.env.PASSWORD,
    // TODO: This should be an ENV variable
    host: "smtp.migadu.com",
    tls: {
      ciphers: "SSLv3",
    },
    timeout: 40000,
  });

  constructor(_body: FormResponse, _forEmail: boolean = false) {
    this.body = _body;
    this.forEmail = _forEmail;
  }

  emailFormat = (): any => {
    return (
      `<h1 style="text-align: center"><img src="${baseURL}/img/HERO_IMAGE.png" alt="Fosshost Logo"/></h1>
            <h1 style="text-align: center; margin: 1rem 0;">Thanks for joining us!<h1>
            <h3 style="max-width: 640px; text-align: center; margin: 0 auto;">
            This email is to confirm the successful submission of your application. To learn more about our services, visit <a href="https://fosshost.org/about">our site</a>, and to review your submitted information, see below.
            </h3>
            <h5 style="max-width: 640px; text-align: center; margin: 0 auto;">
            <br>Your application is currently being reviewed by our team. Within the next 72 working hours you should receive a follow up email detailing our decision or a request for further information.
            </h5>
            <hr>` + this.getHTML(true)
    );
  };

  getFormPart = (part: string): string => {
    return escape(
      `\n### ${headers[part].header}\n${Object.keys(this.body[part])
        .map((n) => {
          if (n == "services" || part != "technical") {
            return " - " + headers[part][n] + ": " + this.body[part][n];
          } else {
            return (
              "\n##### " +
              n +
              " specifics:\n" +
              Object.keys(this.body[part][n])
                .map(
                  (p) =>
                    "- " + headers[part][n][p] + ": " + this.body[part][n][p]
                )
                .join("\n")
            );
          }
        })
        .join("\n")}`
    );
  };

  getMarkdown = (isEmail: boolean = false): string => {
    return `${isEmail ? "" : "## Fosshost Application"}\n${Object.keys(
      this.body
    )
      .map((n) => {
        if (!isEmail || n != "security") {
          return this.getFormPart(n);
        }
      })
      .join("\n")}`;
  };

  getHTML = (isEmail: boolean = false): string => {
    return marked(this.getMarkdown(isEmail));
  };

  createGithubIssue = async () => {
    await axios.post(
      "https://api.github.com/repos/fosshostorg/applications/issues",
      {
        title: "Application: " + this.body.project.name,
        body: this.getMarkdown(),
      },
      {
        auth: {
          username: process.env.GITHUB_USER,
          password: process.env.GITHUB_PASS,
        },
      }
    );
  };

  sendConfirmationEmail = () => {
    const mailOptions: Message = new Message({
        from: process.env.EMAIL,
        to: this.body.personal.email,
	    //   cc: ,
        subject: `Fosshost Application - ${escape(this.body.project.name)}`,
        text: "",
        attachment: [
            { data: this.emailFormat(), alternative: true },
        ]
    })

    this.client.send(mailOptions, (err, msg) => {
      if (err) {
        console.log(err);
      } else if (msg) {
        info("Email sent successfully");
      }
    });
  };

  createOSTicket = async () => {
    const ticket = new osTicket(this);
    await ticket.send();
  };
}

class osTicket {
  alert: boolean = false;
  autorespond: boolean = false;
  source: string = "API";
  name: string;
  email: string;
  subject: string;
  message: string;

  constructor(form: Application) {
    this.email = form.body.personal.email;
    this.name = form.body.personal.name;
    this.subject = `Fosshost Application - ${form.body.project.name}`;
    this.message = `data:text/html,${form.getHTML()}`;
  }

  send = async () => {
    await axios.post(
      "https://support.fossho.st/api/http.php/tickets.json",
      {
        alert: this.alert,
        autorespond: this.autorespond,
        source: this.source,
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": process.env.OSTICKET_API_KEY,
        },
      }
    );
  };
}
