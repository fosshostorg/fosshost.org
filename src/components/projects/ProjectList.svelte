<script>
    import { Projects } from "../../data/projects";

    
</script>

<main>
    {#each Projects as project}
        <a target="_blank" href={project.link}><img src={project.img} alt={project.name} /></a>
    {/each}
    {#each Projects as project}
        <a target="_blank" href={project.link}><img src={project.img} alt={project.name} /></a>
    {/each}
    {#each Projects as project}
        <a target="_blank" href={project.link}><img src={project.img} alt={project.name} /></a>
    {/each}
    {#each Projects as project}
        <a target="_blank" href={project.link}><img src={project.img} alt={project.name} /></a>
    {/each}
</main>

<style>
    main {
        margin: 0 auto 40px;
        max-width: 1280px;
        display: flex;
        flex-wrap: wrap;
    }

    a {
        width: 280px;
        height: 165px;
        background-color: #f4f4f4;
        margin: 10px;
        border-radius: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: ease background-color 0.3s;
    }

    a:hover {
        background-color: #e2e2e2;
    }

</style>