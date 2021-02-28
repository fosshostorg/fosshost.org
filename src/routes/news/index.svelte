<script context="module" lang="ts">
	export async function preload(page: any, session: any) {
		const res = await this.fetch(`/news.json`);
		let posts = await res.json();

		return { posts };
	}
</script>

<script lang="ts">
    import PostCard from "../../components/news/PostCard.svelte";
    export let posts: Post[];
</script>

<main>
    <div>
        <h1>News & Updates</h1>
        <p>Stay up to date with the latest updates, announcements and more from Fosshost.</p>
    </div>
    {#each posts as post}
        <PostCard {post}/>
    {/each}
</main>

<style>

</style>