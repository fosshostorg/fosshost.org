<script context="module" lang="ts">
	export async function load({page, fetch}) {
		const res = await fetch(`/news.json`);
		let posts = await res.json();

		return { props:{posts} };
	}
</script>

<script lang="ts">
    import PostCard from "../../components/news/PostCard.svelte";
    export let posts: Post[];
</script>

<svelte:head>
    <title>Fosshost - News</title>
</svelte:head>

<main>
    <div>
        <h1>News & Updates</h1>
        <p>Stay up to date with the latest updates, announcements and more from Fosshost.</p>
    </div>
    <span>
        {#each posts as post, index}
            <PostCard {post} {index}/>
        {/each}
    </span>
</main>

<style>
    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2rem;
    }

    h1 {
        color: var(--fosshost-black);
        font-size: 40px;
        line-height: 47px;
        margin: 2rem 0 0;
        text-align: center;
    }

    p {
        color: #b1b1b1;
        font-size: 18px;
        line-height: 27px;
        text-align: center;
    }

    span {
        display: flex;
        width: 95%;
        max-width: var(--content-max-width);
        margin: 0 auto;
        flex-wrap: wrap;
        /* justify-content: center; */
    }
</style>