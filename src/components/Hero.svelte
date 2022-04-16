<script>
    export let segment;
</script>

<main>
    <div class="logo">
        <img src="/img/logo_new.png" alt="Fosshost Logo" />
    </div>
    <div class="title">
        <h1>fosshost</h1>
        <p>Helping open source prosper, one project at a time.</p>
    </div>
</main>

<span>
    <a href="/" class="home"    aria-current="{segment === undefined ? 'page' : undefined}">home</a>
    <a href="/about"            aria-current="{segment === 'about' ? 'page' : undefined}">about</a>
    <a href="/news"             aria-current="{segment === 'news' ? 'page' : undefined}">news</a>
    <a href="/donate"           aria-current="{segment === 'donate' ? 'page' : undefined}">donate</a>
    <a href="/apply"            aria-current="{segment === 'apply' ? 'page' : undefined}">apply</a>
</span>


<style>
    main {
        width: auto;
        padding: 0px 40px;
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

    span {
        margin: -2px auto 100px;
        max-width: var(--content-max-width);
        display: flex;
        border: 1px solid var(--fosshost-border-black);
        box-sizing: border-box;
        height: 40px;
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
</style>
