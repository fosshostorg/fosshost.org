import path from "path";
import fs from "fs";
import matter from 'gray-matter';
import marked from 'marked';

const getPost = slug =>
    fs.readFileSync(path.resolve("src/posts", `${slug}`), "utf-8");

export async function get(req, res, next) {
    const posts = fs.readdirSync(path.resolve("src/posts"));
    const sorted = posts.map(filename => {
        const content = getPost(filename);
        const parsed = matter(content);
        console.log(parsed.data.draft);
        return {
          details: {...parsed.data, slug: filename.replace('.md', '')},
          body: parsed.content,
        } 
    }).filter(p => {
      if (!Object.keys(p.details).includes('draft')) {
        return p
      }
    }).sort((a, b) => {
        let a_date = new Date(a.details.date);
        let b_date = new Date(b.details.date);
        if (a_date.getTime() > b_date.getTime()) {
          return -1;
        } else if (a_date.getTime() < b_date.getTime()) {
          return 1;
        } else {
          return 0;
        }
    });

    console.log(sorted.map(p => p.details.date));

    if (sorted !== null) {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(sorted));
	} else {
		next();
	}
}