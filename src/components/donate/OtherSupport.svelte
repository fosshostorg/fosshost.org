<script>
    export let title;
    export let src;
</script>

<main>
    <div>
        <h1>{title}</h1>
        <p>
            <slot></slot>
        </p>
    </div>
    <div>
        <img src={src} alt="Support illustration" />
    </div>
</main>

<style>
    main {
        width: auto;
        max-width: var(--content-max-width);
        margin: 0 auto;
        padding: 0px 40px;
        background-color: white;
        color: var(--fosshost-text-black);
        display: flex;
        flex-direction: row-reverse;
    }

    @media (max-width: 1024px) {
        div {
            height: auto !important;
        }
        main {
            flex-direction: column-reverse;
            padding: 20px 40px 40px;
        }
        div {
            align-items: center;
        }
        img {
            max-width: 95%;
        }
    }

    div {
        height: 510px;
        display: flex;
        flex-grow: 1;
        flex-basis: 50%;
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
    }

    h1 {
        font-size: 42px;
        line-height: 47px;
        height: auto;
        color: var(--fosshost-black);
    }

    p {
        font-size: 24px;
        font-weight: 300;
        line-height: 36px;
        margin-top: 0px;
        color: var(--fosshost-grey);
    }

    img {
        align-self: center;
        /* width: 580px; */
    }

</style>
