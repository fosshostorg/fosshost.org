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
    <h4>By {post.details.author + " |  " + post.details.date}</h4>
    <article>
        {@html post.html}
        {JSON.stringify(post.details)}
    </article>
</main>

<!-- TODO: stylize code inline/blocks: not sure exactly how this should look. -->

<style>
    main {
        width: 95%;
        max-width: 780px;
        margin: 3rem auto;
    }

    @media (max-width: 1280px) {
        main {
            margin: .5rem auto;
        }
    }

    h1 {
        font-size: 40px;
        line-height: 47px;
        color: var(--fosshost-black);
        margin-top: 0;
        margin-bottom: 1rem;
    }

    h4 {
        font-weight: 400;
        font-size: 14px;
        color: var(--fosshost-light-grey);
        margin: 0;
    }

    article {
        color: #383A45;
    }

    article :global(blockquote), article :global(blockquote p) {
        font-size: 28px;
        line-height: 38px;
        font-style: italic;
        color: #72798B;
        position: relative;
    }

    article :global(blockquote p) {
        margin: 0;
    }

    article :global(blockquote::before) {
        content: '';
        background-image: url('/img/quotes.svg');
        background-size: contain;
        background-repeat: no-repeat;
        width: 36px;
        height: 36px;
        position: absolute;
        top: 0;
        left: -4rem;
    }

    article :global(blockquote) {
        margin-left: 6rem;
    }

    article :global(blockquote h1) {
        font-size: 22px;
        line-height: inherit;
        font-weight: 300;
        color: #A2A9BB;
        margin: 0;
    }

    article :global(p), article :global(li) {
        font-size: 18px;
        line-height: 24px;
        color: #383A45;
    }

    article :global(li) {
        margin-top: 1.5rem;
        padding-left: 1rem;
    }

    article :global(ol), article :global(ul) {
        margin-left: 2rem;
    }

    article :global(h2) {
        font-size: 24px;
        line-height: 42px;
    }

    article :global(h5) {
        font-size: 16px;
        line-height: 24px;
    }

    article :global(a) {
        text-decoration: none;
        color: var(--fosshost-orange);
        position: relative;
        display: inline;
        padding: -2px 0;
        transition: 0.5s;
    }

    article :global(a::after) {
        position: absolute;
        content: "";
        width: 100%;
        height: 3px;
        top: 100%;
        left: 0;
        background: var(--fosshost-orange);
        transition: transform 0.5s;
        transform: scaleX(0);
        transform-origin: right;
    }

    article :global(a:hover::after) {
        transform: scaleX(1);
        transform-origin: left;
    }

    article :global(img) {
        max-width: 95%;
    }

    article :global(hr) {
        border: none;
        border-top: 1px solid #A2A9BB;
    }
</style>