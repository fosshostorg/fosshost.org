import path from "path";
import fs from "fs";
import matter from 'gray-matter';
import marked from 'marked';

marked.setOptions({
    baseUrl: 'https://determined-fermi-ed1a04.netlify.app/',
})

const getPost = slug =>
    fs.readFileSync(path.resolve("src/posts", `${slug}.md`), "utf-8");

export async function get(req, res, next) {

    const { slug } = req.params;

    const content = getPost(slug);
    const parsed = matter(content);
    const html = marked(parsed.content);

    const post = {
        details: parsed.data,
        body: parsed.content,
        html,
    }

    if (post !== null) {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(post));
	} else {
		next();
	}
}