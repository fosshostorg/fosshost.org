<script>
    export let title;
    export let subtitle;
    export let src;
</script>

<main>
    <div>
        <h1>Other ways to help and support us</h1>
        <p>
            You could buy us a <a href="#">coffee!</a>
            <br><br>
            We are also always looking for volunteers and we accept hardware or services, please email admin (at) fosshost.org</p>
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
        color: black;
        display: flex;
        flex-direction: row-reverse;
    }

    @media (max-width: 1024px) {
        div {
            height: auto;
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
        width: 580px;
    }

    a {
        text-decoration: none;
        color: var(--fosshost-orange);
        position: relative;
        display: inline;
        padding: -2 px 0;
        transition: 0.5s;
    }

    a::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 3px;
        top: 100%;
        left: 0;
        background: var(--fosshost-orange);
        transition: transform 0.5s;
        transform: scaleX(0);
        transform-origin: right;
    }

    a:hover::after {
        transform: scaleX(1);
        transform-origin: left;
    }
</style>
