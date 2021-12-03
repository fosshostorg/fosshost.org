<script context="module" lang="ts">
	export async function preload(page: any, session: any) {
		const res = await this.fetch(`/news.json`);
		let posts = await res.json();

		return { posts };
	}
</script>

<script lang="ts">
    import Paginator from "../../components/news/Paginator.svelte";
    import PostCard from "../../components/news/PostCard.svelte";
    export let posts: Post[];

    let currentPage = 0;
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
        {#each posts.slice(currentPage * 9, (currentPage+1) * 9) as post, index}
            <PostCard {post} {index}/>
        {/each}
    </span>
    <Paginator bind:page={currentPage} totalPages={Math.round(posts.length / 9)} />
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