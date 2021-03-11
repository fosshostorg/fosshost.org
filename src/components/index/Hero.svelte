<script>
    import Image from "svelte-image";
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
        
        <Image lazy={false} placeholderClass="img" wrapperClass="img-wrapper" class="img2" src="/img/HERO IMAGE.png" alt="Fosshost Drawing" />
        
        <!-- <img src="" alt="Fosshost Drawing" /> -->
    </div>
</main>

<style>
    main {
        width: auto;
        padding: 0px 40px;
        background-color: white;
        color: white;
        display: flex;
        margin: 100px auto;
        max-width: var(--content-max-width);
    }

    @media (max-width: 1024px) {
        div {
            height: auto;
        }
        main {
            flex-direction: column-reverse;
            padding: 20px 40px 40px;
            margin: 0;
        }
        div {
            align-items: center;
        }
        span {
            margin-top: 20px !important;
        }
        div :global(.img-wrapper) {
            /* height: 100%; */
            max-width: 95%;
            /* width: auto !important; */
        }
        div :global(.img) {
            width: auto;
            /* height: 100%; */
        }
        div :globa(.img2) {
            width: auto;
            max-width: 95vw;
        }
    }

    div {
        /* height: 640px; */
        display: flex;
        flex-grow: 1;
        flex-basis: 50%;
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
        color: var(--fosshost-orange);
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
        color: black;
    }

    span {
        margin-top: 35px;
    }

    a {
        border: 1px solid var(--fosshost-orange);
        color: var(--fosshost-orange);
        background-color: white;
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
        color: white;
        background-color: var(--fosshost-orange);
        margin-left: 0px;
    }

    div :global(.img-wrapper) {
        height: 330px;
        width: 580px;
    }

    /* wrapper {
        display: flex;
        height: 100px;
    } */
</style>
