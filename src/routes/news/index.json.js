import path from "path";
import fs from "fs";
import matter from "gray-matter";
import marked from "marked";
import { getPosts } from "../../_utils";

export async function get() {
  const posts = fs.readdirSync(path.resolve("src/posts"));
  const sorted = getPosts();
  return { body: sorted };
}
