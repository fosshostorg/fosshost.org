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
    <title>Fosshost - {post.details.title}</title>
    <meta property="description" content={post.details.summary} />
    <meta property="og:title" content={post.details.title} />
    <meta property="og:description" content={post.details.summary} />
    <meta property="og:type" content="article" />
    <meta property="og:article:published_time" content={post.details.date} />
    <meta property="og:article:author" content={post.details.author} />
    <meta property="og:url" content="https://fosshost.org/news/{slug}" />
    <meta property="og:image" content={post.details.thumbnail ? "https://fosshost.org/thumbnails/" + post.details.thumbnail : "https://fosshost.org/img/HERO_IMAGE.png"} />
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
        width: auto;
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
            padding: 0rem 1rem;
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

</style>