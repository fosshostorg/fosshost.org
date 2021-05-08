const axios = require('axios');
import escape from 'validator/es/lib/escape';


// TODO: write this to include more info
function emailFormat(body: FormResponse): any {
    return (
        `<h1 style="text-align: center"><img src="https://determined-fermi-ed1a04.netlify.app/img/HERO_IMAGE.png" alt="Fosshost Logo"/></h1>
        <h1 style="text-align: center; margin: 1rem 0;">Thanks for joining us!<h1>
        <h3 style="max-width: 640px; text-align: center; margin: 0 auto;">
        This email is to confirm the successful submission of your application. To learn more about our services, visit <a href="https://fosshost.org/about">our site</a>, and to review your submitted information, see below.
        </h3>
        <hr>
        <b>Personal Information</b><br>
        <p>- Name: ${body.personal.name}<p>
        <p>- Email: ${body.personal.email}<p><br>
        <b>Project Information</b><br>
        <p>- Name: ${body.project.name}<p>
        <p>- Desc: ${body.project.description}<p>
        <p>- Your Role: ${body.project.role}<p>
        <p>- Site: ${body.project.site}<p><br>
        <b>Requested Services</b><br>
        <p>- ${body.technical.services.join(", ")}<p><br>
        <h3>Cheers, <br> The Fosshost Team</h3>
        `
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
        "X86 VPS": {
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
        "Audio and Video Conferencing": {
            service: "Requested service",
            specialRequirements: "Special requirements?",
        },
        "Email and Webhosting": {
            domain: "Hosting domain",
            requiresHosting: "Requires DNS hosting?",
            specialRequirements: "Special requirements?",
        }
    }
}

const format = (body: FormResponse) => {
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
        `## Fosshost Application\n${Object.keys(body).map(n => getFormPart(n)).join("\n")}`
    )
}


// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.GMAIL_EMAIL,
//         pass: process.env.GMAIL_PASSWORD
//     }
// });

export async function post(req: any, res: any, next: () => void) {
    console.log(req.body)

    await axios.post("https://api.github.com/repos/fosshostorg/applications/issues", 
        {
            title: "Application: " + req.body.project.name,
            body: format(req.body) 
        },
        {
            auth: {
                username: process.env.GITHUB_USER,
                password: process.env.GITHUB_PASS
            }  
        },
    )

    // transporter.sendMail(mailOptions, function(error, info){
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log('Email sent: ' + info.response);
    //     }
    // })

    res.end();
}