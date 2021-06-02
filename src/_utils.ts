import path from "path";
import fs from "fs";
import matter from 'gray-matter';

export function info(msg: string): void {
  console.log(`[INFO | ${Date.now()}] ${msg}`);
}

const getPost = slug =>
    fs.readFileSync(path.resolve("src/posts", `${slug}`), "utf-8");

export function getPosts(): Post[] {
    const posts = fs.readdirSync(path.resolve("src/posts"));
    const sorted = posts.map((filename) => {
        const content = getPost(filename);
        const parsed = matter(content);
        return {
          details: {...parsed.data, slug: filename.replace('.md', '')},
          body: parsed.content,
        } 
    }).filter((p: Post) => {
      if (!Object.keys(p.details).includes('draft')) {
        return p
      }
    }).sort((a: Post, b: Post) => {
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

    return sorted as Post[];
}