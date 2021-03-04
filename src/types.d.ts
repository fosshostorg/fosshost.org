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
    },
    body: string,
    html?: string
}