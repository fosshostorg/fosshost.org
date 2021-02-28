import path from "path";
import fs from "fs";
import matter from 'gray-matter';

const getPost = slug =>
    fs.readFileSync(path.resolve("src/posts", `${slug}`), "utf-8");

export async function get(req, res, next) {
    const posts = fs.readdirSync(path.resolve("src/posts"));
    const sorted = posts.map(filename => {
        const content = getPost(filename);
        const parsed = matter(content);
        return {
            details: {...parsed.data, slug: filename.replace('.md', '')},
            body: parsed.content
        }
    }).sort((a, b) => {
        let a_date = new Date(a.date);
        let b_date = new Date(b.date);
        if (a_date.getTime() > b_date.getTime()) {
          return -1;
        } else if (a_date.getTime() < b_date.getTime()) {
          return 1;
        } else {
          return 0;
        }
    });

    if (sorted !== null) {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(sorted));
	} else {
		next();
	}
}