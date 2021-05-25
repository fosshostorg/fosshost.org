<script lang="ts">
    export let img: string;
    export let reverse: boolean = false;
</script>

<main style="--flexNormal:{reverse ? "row-reverse" : "row"}">
    <div style="max-width: 700px; margin: 0 auto;">
        <p><slot /></p>
    </div>
    <!-- <div>
        <img alt="Fosshost Illustration" src={img} />
    </div> -->
</main>

<style>
    main {
        width: auto;
        display: flex;
        margin: 20px 40px;
        flex-direction: var(--flexNormal);
    }

    @media (max-width: 768px) {
        main {
            flex-direction: column-reverse;
        }
        img {
            max-width: 95%;
        }
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-basis: 50%;
        flex-grow: 1;
    }

    p {
        font-size: 24px;
        line-height: 40px;
    }

</style>
