import path from "path";
import fs from "fs";
import matter from 'gray-matter';
import marked from 'marked';
import { getPosts } from "../../_utils";

const getPost = slug =>
    fs.readFileSync(path.resolve("src/posts", `${slug}`), "utf-8");

export async function get(req, res, next) {
    const posts = fs.readdirSync(path.resolve("src/posts"));
    const sorted = getPosts();

    if (sorted !== null) {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(sorted));
	} else {
		next();
	}
}