<script lang="ts">
	import Footer from '../components/Footer.svelte';
	import Hero from '../components/Hero.svelte';

	export let segment: string;
</script>

<style>
	main {
		width: 100%;
		min-height: 100vh;
	}
</style>

<Hero {segment} />

<main>
	<slot></slot>
</main>

<Footer attachCTA={segment !== "/apply"} />