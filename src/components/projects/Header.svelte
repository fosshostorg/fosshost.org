<script>

</script>

<main>
    <div>
        <h1>We provided a tailored hosting service to fit the needs of each project we help.</h1>
        <p>We provide a maintained list of projects that benefit from our service. Some of these projects may have hundreds of sub-projects that we do not list here. </p>
    </div>
    <div>
        <img src="/img/illustration0.png" alt="Fosshost Drawing" />
    </div>
</main>

<style>
    main {
        width: auto;
        padding: 0px 40px;
        background-color: white;
        color: black;
        display: flex;
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
        /* height: 100%; */
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
    }

    h1 {
        font-size: 42px;
        line-height: 47px;
        height: auto;
    }

    p {
        font-size: 24px;
        font-weight: 300;
        line-height: 36px;
        margin-top: 0px;
    }

    span {
        margin-top: 35px;
    }

    a {
        border: 1px solid white;
        color: white;
        background-color: var(--fosshost-orange);
        padding: 5px 14px;
        font-size: 18px;
        font-weight: 600;
        line-height: 27px;
        border-radius: 6px;
        font-family: inherit;
        margin: 0px;
        margin-right: 10px;
        margin-top: 15px;
        text-decoration: none;
    }

    a.apply {
        color: var(--fosshost-orange);
        background-color: white;
        margin-left: 0px;
    }

    img {
        align-self: center;
        width: 580px;
    }
</style>
