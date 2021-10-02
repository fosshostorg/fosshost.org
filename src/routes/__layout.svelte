<script lang="ts">
	import Footer from '../components/Footer.svelte';
	import Nav from '../components/Nav.svelte';
	import '../app.css'
	export let segment: string;
</script>

<style>
	main {
		width: 100%;
		min-height: 100vh;
	}
</style>

<Nav {segment} />

<main>
	<slot></slot>
</main>

<Footer />