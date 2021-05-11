<script>
    import { Projects } from "../../data/projects";
    import { fade } from "svelte/transition"
    
</script>

<!-- TODO: Decide whether or not to move some of this to a place in the projects page. -->

<main>
    {#each Projects as project, i}
            <a target="_blank" href={project.link} in:fade={{delay: 50*i, duration: 200}}>
                {#if project.img}
                <img src={"/img/project-logos/" + project.img} alt={project.name} />
                {:else}
                {project.name}
                {/if}
            </a>
    {/each}
</main>

<style>
    main {
        margin: 0 auto;
        margin-bottom: 40px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: calc(var(--content-max-width) + 300px);
    }
    
    @media (max-width: 640px) {
        a {
            height: 70px !important;
            width: calc(100% - 40px) !important;
        }
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
        font-size: 1.85rem;
        color: #787878;
        font-weight: 600;
        text-align: center;
        text-decoration: none;
    }

    a:hover {
        background-color: #e2e2e2;
    }

    img {
        max-height: 70px;
        filter: grayscale(100%);
        -webkit-filter: grayscale(100%);
        opacity: 0.6;
    }

</style>