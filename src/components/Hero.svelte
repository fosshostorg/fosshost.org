<script>
    export let segment;
    let open = false;
</script>

<main>
    <div class="logo">
        <img src="/img/logo-new.png" alt="Fosshost Logo" />
    </div>
    <div class="title" on:click={() => {window.location.href = "/"}} style="cursor: pointer;">
        <h1>fosshost</h1>
        <p>Helping open source prosper, one project at a time.</p>
    </div>
</main>

<div style="width: 100%; display: flex; flex-direction: row; margin-bottom: 100px;">
    <span class="wrapper" on:click={() => {open = false}}>
        <a href="/" class="home" class:open   aria-current="{segment === undefined ? 'page' : undefined}">home</a>
        <a href="/about" class:open           aria-current="{segment === 'about' ? 'page' : undefined}">about</a>
        <a href="/news" class:open            aria-current="{segment === 'news' ? 'page' : undefined}">news</a>
        <a href="/donate" class:open          aria-current="{segment === 'donate' ? 'page' : undefined}">donate</a>
        <a href="/apply" class:open           aria-current="{segment === 'apply' ? 'page' : undefined}">apply</a>
    </span>
    
    <div class="material-icons" on:click={() => {open = !open}}>
        <span class="material-icons" style="display: flex; justify-content: center;">
            menu
        </span> 
    </div>
</div>




<style>
    main {
        width: auto;
        /* padding: 0px 40px; */
        background-color: white;
        color: white;
        display: flex;
        margin: 100px auto 0px;
        max-width: var(--content-max-width);
    }

    div.logo {
        width: 135px;
        height: 135px;
        padding: 30px;
        border: 2px solid var(--fosshost-border-black);
    }

    img:hover {
        filter: grayscale();
        transition: ease filter 0.5s;
    }

    div.title {
        height: 195px;
        width: 100%;
        padding-left: 25px;
        margin-left: -2px;
        border: 2px solid var(--fosshost-border-black);
    }

    div {
        /* height: 640px; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: var(--fosshost-orange);
    }

    h1 {
        font-size: 72px;
        margin: 0px;
        color: var(--fosshost-black);
    }

    p {
        font-size: 20px;
        font-weight: 300;
        line-height: 36px;
        margin: 0px;
        margin-top: -10px;
        color: var(--fosshost-text-black);
    }

    span.wrapper {
        margin: -2px 0px;
        max-width: var(--content-max-width);
        display: flex;
        border: 1px solid var(--fosshost-border-black);
        box-sizing: border-box;
        height: 40px;
        flex-grow: 1;
    }

    a {
        border: 1px solid var(--fosshost-border-black);
        color: var(--fosshost-text-black);
        background-color: white;
        font-size: 22px;
        font-weight: 600;
        line-height: 27px;
        font-family: inherit;
        margin: 0px;
        text-decoration: none;
        display: flex;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
    }

    a:hover {
        color: white;
        background-color: var(--fosshost-text-black);
    }

    a.home {
        width: 195px;
        flex-grow: 0;
    }

    [aria-current] {
        color: white;
        background-color: var(--fosshost-text-black);
    }

    div :global(.img-wrapper) {
        height: 330px;
        width: 580px;
    }

    div.material-icons {
        display: none;
        color: var(--fosshost-text-black);
        width: 40px;
        border: 2px solid black;
        border-left: none;
        border-top: none;
        justify-content: center;
        height: 36px;
        box-sizing: border-box;
        cursor: pointer;
    }

    @media (max-width: 750px) {
        main {
            margin: 1rem auto 0rem;
            padding: 0rem;
            max-width: 90%;
        }

        span.wrapper {
            max-width: 90%;
        }

        p {
            font-weight: 500;
        }
    }

    @media (max-width: 700px) {
        img {
            width: 80px;
            margin: 0 auto;
        }

        div.logo {
            padding: 1rem;
        }

        div.title {
            height: 163px;
            padding-left: 15px;
        }

        h1 {
            font-size: 50px;
        }

        p {
            font-size: 16px;
            line-height: normal;
        }

        a {
            width: 100%;
            flex-grow: 1 !important;
            padding: 0.25rem 0rem;
            display: none;
        }

        span.wrapper {
            flex-wrap: wrap;
            height: fit-content;
            max-width: calc(90% - 40px);
            /* margin-left: 5%; */
        }

        .open, [aria-current] {
            display: flex;
        }

        div.material-icons {
            display: flex;
        }
    }
</style>
