<script lang="ts">
	import Footer from '../components/Footer.svelte';
	import Nav from '../components/Nav.svelte';

	export let segment: string;
</script>

<style>
	main {
		width: 100%;
		min-height: 100vh;
	}
</style>

<main>
	<slot></slot>
</main>

<Footer />