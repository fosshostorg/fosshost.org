<script lang="ts">
	export let status: number;
	export let error: Error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
	<title>Fosshost - {status}</title>
</svelte:head>

{#if status == 404}
<main>
	<h1>{status}</h1>
	<h2>The page you are looking for can't be found.</h2>
	<img src="/img/illustration3.webp" alt="404 Illustration"/>
</main>
{:else}
<main>
	<h1>{status}</h1>
	{error.message}
</main>
{/if}

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
		max-width: 600px;
		text-align: center;
	}

	img {
		margin-top: 2rem;
		max-width: 382px;
	}

	h1, h2 {
		margin: 0px;
		font-weight: 400;
	}

	h1 {
		font-size: 12rem;
		line-height: 0.95;
	}

	@media (max-width: 382px) {
		h1 {
			font-size: 6rem;
		}
		h2 {
			font-size: 1rem;
		}
		img {
			width: 98%;
		}
	}
</style>
