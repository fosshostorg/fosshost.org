<script>

</script>

<main>
    <div>
        <h1>About Fosshost</h1>
        <p>We are a non-profit organisation that exists to serve the hosting needs of the global open source community.</p>
    </div>
    <div>
        <img src="/img/illustration0.webp" alt="Fosshost Drawing" />
    </div>
</main>

<style>
    main {
        width: auto;
        padding: 0px 40px;
        background-color: white;
        color: black;
        display: flex;
        flex-direction: column;
        max-width: calc(var(--content-max-width) - 500px);
        margin: 2rem auto;
    }

    @media (max-width: 1024px) {
        div {
            height: auto;
        }
        /* main {
            padding: 20px 40px 40px;
        } */
        div {
            align-items: center;
        }
        img {
            max-width: 95%;
        }
    }

    div {
        display: flex;
        flex-grow: 1;
        flex-basis: 50%;
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
        text-align: center;
    }

    h1 {
        font-size: 42px;
        line-height: 47px;
        height: auto;
        margin-top: 0;
        color: var(--fosshost-black);
    }

    p {
        font-size: 24px;
        font-weight: 300;
        line-height: 36px;
        margin-top: 0px;
    }

    img {
        align-self: center;
        width: 580px;
    }
</style>
