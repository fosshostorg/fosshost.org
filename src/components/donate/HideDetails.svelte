<script lang="ts">
    export let open: boolean = false;
</script>

<div>
    <span class="title" on:click={() => {open = !open}}>
        <span class="material-icons">{open ? "arrow_drop_down" : "arrow_right"}</span>
        <slot name="title"></slot>
    </span>
    <span class="body" class:open>
        <slot name="body"></slot>
    </span>
</div>

<style>
    span.title {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    span.title :global(p) {
        text-decoration: underline;
    }

    span.title span {
        text-decoration: none !important;
    }

    span.body{
        display: none;      
    }

    span.body :global(p) {
        font-size: 18px !important;
        line-height: 22px;
    }

    span.body :global(br) {
        line-height: 10px;
    }

    span.body :global(em) {
        text-decoration: underline;
    }

    span.body.open {
        display: flex;
    }

    div {
        margin: 1rem 0;
    }

    div :global(p) {
        margin: 0rem;
    }
</style>