const axios = require('axios');
const nodemailer = require('nodemailer');
import {doc, p, ul, li, b, u} from '@atlaskit/adf-utils/builders'

function format(body: FormResponse): any {

    const formatted = doc(
        p(
            b(
                u(
                    "Project Application"
                )
            ),
        ),
        p(
            u("Applicant Information"),
        ),
        ul(
            li([
                p(`name: ${body.personal.name}`),
            ]),
            li([
                p(`email: ${body.personal.email}`),
            ]),
            li([
                p(`role: ${body.project.role}`),
            ]),
        ),
        p(
            u("Project Information"),
        ),
        ul(
            li([
                p(`name: ${body.project.name}`),
            ]),
            li([
                p(`description: ${body.project.description}`),
            ]),
            li([
                p(`site: ${body.project.site}`),
            ]),
        ),
        p(
            u("Requested Services"),
        ),
        ul(
            li([
                p(`${body.technical.services.join(", ")}`),
            ]),
        ),
        p(
            u("Security Information"),
        ),
        ul(
            li([
                p(`accepted criteria? ${body.security.hasAcceptedCriteria}`),
            ]),
            li([
                p(`question response: ${body.security.criteriaQuestionResponse}`),
            ]),
        ),
    )
    return formatted;
}

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

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.GMAIL_EMAIL,
//         pass: process.env.GMAIL_PASSWORD
//     }
// });

export async function post(req: any, res: any, next: () => void) {
    console.log(req.body)
    // console.log(JSON.stringify(req.body))

    await axios.post("https://api.github.com/repos/fosshostorg/applications/issues", {
        auth: {
            username: process.env.GITHUB_USER,
            password: process.env.GITHUB_PASS
        },
        data: {
            title: "Application: " + req.body.project.name,
            body: emailFormat(req.body) + "\n\n Pure JSON: \n" + JSON.stringify(req.body) 
        }
    })

    // axios
    //     .post('https://seth-test.atlassian.net/rest/api/3/issue', {
    //         "fields": {
    //            "project":
    //            {
    //               "key": "TB"
    //            },
    //            "summary": "Project Application: " + req.body.project.name,
    //            "description": format(req.body),
    //            "issuetype": {
    //               "name": "Task"
    //            }
    //        }
    //     },
    //     {headers: {'Content-Type': 'application/json', 'Authorization': 'Basic process.env.BASE64_API_KEY'}}
    //     )
    //     .then(res => {
    //         console.log(`statusCode: ${res.statusCode}`)
    //         console.log(res)
    //     })
    //     .catch(error => {
    //         console.error(error)
    //     })

    // const mailOptions = {
    //     from: process.env.GMAIL_EMAIL,
    //     to: 'knightss27@protonmail.com',
    //     subject: 'Fosshost Application Confirmation',
    //     html: emailFormat(req.body),
    // }

    // transporter.sendMail(mailOptions, function(error, info){
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log('Email sent: ' + info.response);
    //     }
    // })

    res.end();
}