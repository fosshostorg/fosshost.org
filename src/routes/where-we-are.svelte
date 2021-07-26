<script>
    import marked from "marked";
    import text from "../static_pages/where-we-are.md";
</script>

<svelte:head>
    <title>Fosshost - Where We Are</title>

    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css" integrity="sha512-07I2e+7D8p6he1SIM+1twR5TIrhUQn9+I6yjqD53JQjFiMf8EtC93ty0/5vJTZGF8aAocvHYNEDJajGdNx1IsQ==" crossorigin="" />
    <script src="https://unpkg.com/leaflet@1.0.3/dist/leaflet-src.js" integrity="sha512-WXoSHqw/t26DszhdMhOXOkI7qCiv5QWXhH9R7CgvgZMHz1ImlkVQ3uNsiQKu5wwbbxtPzFXd1hK4tzno2VqhpA==" crossorigin=""></script>

    <link rel="stylesheet" href="https://raw.githubusercontent.com/dragstor/Leaflet.markercluster/master/dist/MarkerCluster.css" />
    <link rel="stylesheet" href="https://raw.githubusercontent.com/dragstor/Leaflet.markercluster/master/dist/MarkerCluster.Default.css" />
    <script src="https://leaflet.github.io/Leaflet.markercluster/dist/leaflet.markercluster-src.js"></script>
</svelte:head>

<main>
    <article>
        {@html marked(text)}
    </article>
</main>

<style>
    main {
        width: auto;
        max-width: 780px;
        margin: 3rem auto;
    }
    @media (max-width: 1280px) {
        main {
            margin: 0.5rem auto 3rem;
            padding: 0rem 1rem;
        }
    }
</style>
