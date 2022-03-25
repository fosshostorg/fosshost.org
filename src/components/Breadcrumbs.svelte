<script lang="ts">
    export let path: {label: string, href: string}[] = [];
</script>

<div>
    {#each path as part, i}
    <span>
        <a rel="prefetch" href={part.href}>{part.label}</a>
        {i !== path.length-1 ? "/" : ""}
    </span>
    {/each}
</div>

<style>
    div {
        width: 100%;
        margin: 1rem 0 0.25rem;
    }

    div span {
        font-size: 14px;
        line-height: 21px;
        color: var(--fosshost-grey);
        margin-right: 0.3rem;
    }

    a {
        margin-right: 0.3rem;
        text-decoration: none;
        color: black;
    }

    a:hover {
        text-decoration: underline;
    }
</style>