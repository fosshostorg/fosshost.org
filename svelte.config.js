import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-netlify";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */

const config = {
  "extensions": [".svelte", ...mdsvexConfig.extensions],
  preprocess: [preprocess({}), mdsvex(mdsvexConfig)],

  kit: {
    adapter: adapter(),
    target: "#svelte",
    vite: {},
  }
};
export default config;
