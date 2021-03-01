<svelte:head>
	<title>About</title>
</svelte:head>

<script>
    import Header from "../components/Header.svelte";
    import ProjectList from "../components/projects/ProjectList.svelte";
</script>

<main>
    <Header 
        title="We provide a tailored hosting service to fit your needs"
        subtitle="We provide a maintained list of projects that benefit from our service. Some of these projects may have hundreds of sub-projects that we do not list here."
        src="/img/illustration0.png"
    />
    <ProjectList />
    <!-- TODO: Pass data through the list here? -->
</main>

<style>
    main {
        width: 100%;
    }
</style>
