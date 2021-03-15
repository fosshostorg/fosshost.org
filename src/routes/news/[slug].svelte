<script context="module">
	export async function preload(page, session) {
		const { slug } = page.params;

		const res = await this.fetch(`news/${slug}.json`);
		let post = await res.json();

		return { post, slug };
	}
</script>

<script lang="ts">
    import Breadcrumbs from "../../components/Breadcrumbs.svelte";

    export let post: Post;
    export let slug: string;

    $: path = [
        {label: 'News', href: "/news"},
        {label: post.details.title, href: `/news/${slug}`}
    ]

    const dateFormatOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date((post.details.date).replace(/-/g, '\/').replace(/T.+/, '')).toLocaleDateString("en-US", dateFormatOptions);
</script>

<svelte:head>
    <title>{post.details.title}</title>
</svelte:head>

<main>
    <Breadcrumbs {path} />
    <h1>{post.details.title}</h1>
    <h4>By {post.details.author + " |  " + date}</h4>
    {#if post.details.thumbnail}
        <img src={"/thumbnails/" + post.details.thumbnail} alt={"Thumbnail for " + post.details.title}>
    {/if}
    <article>
        {@html post.html}
        {#if post.details.draft}
        {JSON.stringify(post.details)}
        {/if}
    </article>
    <div>
        <!-- TODO: Add the more links area... harder than it looks -->
    </div>
</main>

<!-- TODO: stylize code inline/blocks: not sure exactly how this should look. -->

<style>
    main {
        width: 95%;
        max-width: 780px;
        margin: 3rem auto;
    }

    img {
        width: 100%;
        margin: 2rem 0;
    }

    @media (max-width: 1280px) {
        main {
            margin: .5rem auto 3rem;
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