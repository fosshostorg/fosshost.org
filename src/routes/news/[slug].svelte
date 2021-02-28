<script context="module">
	export async function preload(page, session) {
		const { slug } = page.params;

		const res = await this.fetch(`news/${slug}.json`);
		let post = await res.json();

		return { post };
	}
</script>

<script>
    export let post;
</script>

<main>
    <h1>{post.details.title}</h1>
    <article>
        {@html post.html}
        {JSON.stringify(post.details)}
    </article>
</main>