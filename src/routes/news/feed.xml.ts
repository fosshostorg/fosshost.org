import { getPosts } from "../../_utils";

export {}

const siteURL = "https://fosshost.org/news/";

const renderXML = (posts: Post[]) => {
    return `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
        <channel>
            <title>Fosshost</title>
            <link>https://fosshost.org/news</link>
            <description>
            At Fosshost we provide free hosting and related services to hundreds of open source projects. Apply today!
            </description>
            <lastBuildDate>${new Date()}</lastBuildDate>
            <docs>https://validator.w3.org/feed/docs/rss2.html</docs>
            ${posts.map(p => renderPostXML(p)).join("\n")}
        </channel>
    </rss>
    `
}

function renderPostXML(p: Post) {
    return (
    `<item>
        <title>${p.details.title}</title>
        <link>${siteURL + p.details.slug}</link>
        <guid>${siteURL + p.details.slug}</guid>
        <pubDate>${p.details.date}</pubDate>
        <description>${p.details.summary ? p.details.summary : p.body.split(" ").splice(0, 15).join(" ") + "..."}</description>
    </item>`
    )
}

export function get(req, res) {
    res.writeHead(200, {
        'Cache-Control': `max-age=0, s-max-age=${600}`, // 10 minutes
        'Content-Type': 'text/xml'
    });

    const posts = getPosts().filter(p => !p.details.draft);

    const feed = renderXML(posts);
    res.end(feed);
}