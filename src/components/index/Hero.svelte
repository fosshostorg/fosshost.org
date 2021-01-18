<script>

</script>

<main>
    <div>
        <h1>To go further, together. Our work never stops.</h1>
        <p>We're on a mission to empower and support every free and open source software project.</p>
        <span>
            <a href="/apply" class="apply">Apply Now</a>
            <a href="/about" >Read More</a>
        </span>
    </div>
    <div>
        <img src="/img/illustration0.png" alt="Fosshost Drawing" />
    </div>
</main>

<style>
    main {
        width: auto;
        padding: 0px 40px;
        background-color: var(--fosshost-color);
        color: white;
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
        span {
            margin-top: 20px !important;
        }
        img {
            max-width: 95%;
        }
    }

    div {
        height: 640px;
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
        background-color: var(--fosshost-color);
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
        color: var(--fosshost-color);
        background-color: white;
        margin-left: 0px;
    }

    a:hover {

    }

    img {
        align-self: center;
        width: 580px;
        mix-blend-mode: multiply;
    }
</style>
