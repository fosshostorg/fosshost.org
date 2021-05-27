const axios = require('axios');
// const nodemailer = require('nodemailer');
import { Message, SMTPClient } from 'emailjs';
import escape from 'validator/es/lib/escape';
import marked from 'marked';
import { info } from '../../_utils';


let baseURL = "https://fosshost.org"

function emailFormat(body: FormResponse): any {
    return (
        `<h1 style="text-align: center"><img src="${baseURL}/img/HERO_IMAGE.png" alt="Fosshost Logo"/></h1>
        <h1 style="text-align: center; margin: 1rem 0;">Thanks for joining us!<h1>
        <h3 style="max-width: 640px; text-align: center; margin: 0 auto;">
        This email is to confirm the successful submission of your application. To learn more about our services, visit <a href="https://fosshost.org/about">our site</a>, and to review your submitted information, see below.
        </h3>
        <hr>` + marked(format(body, true))
    )
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
        "DNS": {
            domain: "Requested domain",
            requiresHosting: "Requires DNS hosting?"
        },
        "x86 VPS": {
            regions: "Regional preferences",
            IPv4Preference: "IPv4 preference",
            vCPUs: "vCPUs",
            memory: "Memory",
            storage: "Storage",
            os: "Operating System",
            SSHKey: "Public SSH Key",
        },
        "Mirrors-as-a-service": {
            storage: "Storage",
            specialRequirements: "Special requirements?",
        },
        "AArch64 VPS": {
            createdAccount: "Created an AArch64 account?",
        },
        // "Audio and Video Conferencing": {
        //     service: "Requested service",
        //     specialRequirements: "Special requirements?",
        // },
        "Email and Webhosting": {
            domain: "Hosting domain",
            requiresHosting: "Requires DNS hosting?",
            specialRequirements: "Special requirements?",
        }
    }
}

const format = (body: FormResponse, forEmail: boolean) => {
    const getFormPart = (part: string): string => {
        return (
            escape(
                `\n### ${headers[part].header}\n${Object.keys(body[part]).map(n => {
                    if (n == "services" || part != "technical") {
                        return (
                        " - " + headers[part][n] + ": " + body[part][n]
                        )
                    } else {
                        return (
                            "\n##### " + n + " specifics:\n" + Object.keys(body[part][n]).map(p => "- " + headers[part][n][p] + ": " + body[part][n][p]).join("\n")
                        )
                    }
                }).join("\n")}`
            )
        )
    }

    return (
        `${forEmail ? "" : "## Fosshost Application"}\n${Object.keys(body).map(n => {
            if (!forEmail || n != "security") {
                return getFormPart(n);
            }
        }).join("\n")}`
    )
}


// const transporter = nodemailer.createTransport({
//     service: process.env.EMAIL_PROVIDER,
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASSWORD
//     }
// });

const client = new SMTPClient({
	user: process.env.EMAIL,
	password: process.env.PASSWORD,
	host: "smtp.office365.com",
    tls: {
		ciphers: 'SSLv3',
	},
    timeout: 40000,
});

export async function post(req: any, res: any, next: () => void) {
    info(`Application received: ${req.body.project.name}`)

    await axios.post("https://api.github.com/repos/fosshostorg/applications/issues", 
        {
            title: "Application: " + req.body.project.name,
            body: format(req.body, false) 
        },
        {
            auth: {
                username: process.env.GITHUB_USER,
                password: process.env.GITHUB_PASS
            }  
        },
    )

    const mailOptions: Message = new Message({
        from: process.env.EMAIL,
        to: req.body.personal.email,
        subject: 'Fosshost Application Confirmation',
        text: "",
        attachment: [
            { data: emailFormat(req.body), alternative: true },
        ]
    })

    client.send(mailOptions, (err, msg) => {
        if (err) {
            console.log(err);
        } else if (msg) {
            info("Email sent successfully");
        }
        
    })

    // transporter.sendMail(mailOptions, function(error, info){
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         info('Email sent: ' + info.response);
    //     }
    // })

    res.end();
}