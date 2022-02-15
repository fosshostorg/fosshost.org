<script lang="ts">
    export let img: string;
    export let reverse: boolean = false;
</script>

<main style="--flexNormal:{reverse ? "row-reverse" : "row"};">
    <p style="{reverse ? "margin-left: -2px;" : "margin-right: -2px;"}"><slot /></p>
    <div class="image">
        <img alt="Fosshost Illustration" src={img} />
    </div>
</main>

<style>
    main {
        width: auto;
        display: flex;
        margin: 0px auto;
        flex-direction: var(--flexNormal);
        max-width: 750px;
        align-items: center;
    }

    div {
        border: 2px solid black;
        flex-grow: 0;
    }

    div.image {
        height: 190px;
        width: 190px;
        padding: 20px;
    }

    img {
        height: 100%;
    }

    p {
        font-size: 18px;
        width: 100%;
        padding: 25px;
        border: 2px solid black;
    }
</style>
