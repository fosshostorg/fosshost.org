<svelte:head>
	<title>About</title>
</svelte:head>

<script>
    import Header from "../components/projects/Header.svelte";
    import ProjectList from "../components/projects/ProjectList.svelte";
</script>

<main>
    <Header />
    <ProjectList />
    <!-- TODO: Pass data through the list here? -->
</main>

<style>
    main {
        width: 100%;
    }
</style>
