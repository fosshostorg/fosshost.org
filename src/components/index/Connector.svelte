<script>
    export let reverse = false;
</script>

<main class:reverse>
    <div class="right"></div>
    <div class="left"></div>
</main>

<style>
    main {
        display: flex;
        max-width: 650px;
        margin: 0 auto;
        flex-direction: column;
    }

    main.reverse {
        flex-direction: column-reverse;
    }

    div.left, div.right {
       width: 100%;
       height: 40px;
    }

    div.left {
        border-left: 2px dashed var(--fosshost-border-black);
    }

    div.right {
        border-right: 2px dashed var(--fosshost-border-black);
    }

    div:last-child {
        border-top: 2px dashed var(--fosshost-border-black);
    }

    main.reverse div:last-child {
        border-top: none;
        border-bottom: 2px dashed var(--fosshost-border-black);
    }
</style>
