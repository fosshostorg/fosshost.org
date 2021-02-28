<script lang="ts">
    import { Projects } from "../../data/projects";
</script>

<main>
    <h2>Some of the projects we support</h2>
    <div>
    {#each Projects as project}
        <a class="img" href={project.link}><img src={project.img} alt={project.name}/></a>
    {/each}
    </div>
    <a class="more" href="/projects" >See more projects<span class="material-icons">arrow_forward</span></a>
</main>

<style>
    main {
        width: auto;
        padding: 0px 20px 20px;
        background-color: #c4c4c444;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 250px;
    }

    h2 {
        color: #a8a8a8;
    }

    a.more {
        color: var(--fosshost-orange);
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
    }

    a {
        text-decoration: none;
    }

    a.img {
        margin: 20px;
    }

    div {
        display: flex;
        width: 100%;
        max-width: var(--content-max-width);
        align-items: center;
        justify-content: space-around;
        margin: 20px 0px;
        flex-wrap: wrap;
    }

    span {
        font-size: 16px;
        margin: 0px 10px;
    }

</style>
