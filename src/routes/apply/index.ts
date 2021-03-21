const axios = require('axios');
import { doc, p, ul, li, b, u, br} from '@atlaskit/adf-utils/builders'

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

export async function post(req: any, res: any, next: () => void) {
    console.log(req.body)
    console.log(JSON.stringify(req.body))
    
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


    res.end();
}