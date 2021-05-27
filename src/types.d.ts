type Project = {
    name: string;
    id: string;
    img: string;
    description: string;
    link: string;
}

type Sponsor = {
    name: string,
    link: string,
}

type Provider = {
    name: string;
    location: string;
    details: string[];
    network: string;
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

type Service = "x86 VPS" | "Mirrors-as-a-service" | "AArch64 VPS" | "Email and Webhosting" | "DNS";

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
        services: Service[],
        "DNS"?: {
            domain: string,
            requiresHosting: boolean
        },
        "x86 VPS"?: {
            regions: string[],
            IPv4Preference: string,
            vCPUs: string,
            memory: string,
            storage: string,
            os: string,
            SSHKey: string,
        },
        "Mirrors-as-a-service"?: {
            storage: string,
            specialRequirements: string,
        },
        "AArch64 VPS"?: {
            createdAccount: boolean,
        },
        "Email and Webhosting"?: {
            domain: string,
            requiresHosting: boolean,
            specialRequirements: string,
        }
    }
}