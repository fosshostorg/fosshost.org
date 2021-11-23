<script>
  import Header from "../components/Header.svelte";
  import ProjectList from "../components/projects/ProjectList.svelte";
</script>

<svelte:head>
  <title>Fosshost - Projects</title>
</svelte:head>

<main>
  <Header
    title="We provide a hosting service to fit your needs"
    subtitle="Below is a list of some of the projects that benefit from our service. Some of these projects may have hundreds of sub-projects that we do not list here."
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
