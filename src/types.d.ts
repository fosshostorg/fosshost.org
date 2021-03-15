type Project = {
    name: string;
    id: string;
    img: string;
    description: string;
    link: string;
}

type Post = {
    details: {
        title: string,
        date: string,
        thumbnail?: string,
        author: string,
        summary?: string,
        slug: string,
        draft?: boolean,
    },
    body: string,
    html?: string
}

type FormResponse = {
    security: {
        hasAcceptedCriteria: boolean,
        criteriaQuestionResponse: string,
    },
    personal: {
        name: string,
        email: string,
    },
    project: {
        name: string,
        description: string,
        role: string,
        site?: string,
    },
    technical: {
        service: "X86 VPS" | "Mirrors-as-a-service" | "AArch64 VPS" | "Email and Webhosting" | "DNS" | "Audio and Video Conferencing",
    }
}