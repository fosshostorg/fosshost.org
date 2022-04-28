<script>
    import marked from "marked";
    import text from "../static_pages/web-stats.md";
</script>

<svelte:head>
    <title>Fosshost - Web Statistics</title>
</svelte:head>

<main>
    <article>
        {@html marked(text)}
    </article>
</main>

<style>
    main {
        width: auto;
        max-width: var(--content-max-width);
        margin: 3rem auto;
    }
    @media (max-width: 1280px) {
        main {
            margin: 0.5rem auto 3rem;
            padding: 0rem 1rem;
        }
    }
</style>
