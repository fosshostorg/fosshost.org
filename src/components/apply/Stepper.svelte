<script lang="ts">
    export let current: number = 0;

    let steps = [
        "Personal Information",
        "Project Information",
        "Technical Specifications",
        "Security Question"
    ]

</script>

<main>
    {#each steps as step, i}
    <div>
        <p class:active={current >= i}>{step}</p>
        <span class="bg"></span>
        <span class="bar" style={"width:" + (current >= i ? "100%" : "0%")}></span>
    </div>
    {/each}
</main>

<style>
    main {
        display: flex;
        width: auto;
        margin: 1rem;
        color: var(--fosshost-light-grey);
    }

    div {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        margin-right: 6px;
    }

    span.bg {
        width: auto;
        height: 3px;
        background: var(--fosshost-light-grey);
    }

    span.bar {
        height: 3px;
        margin-top: -3px;
        background: var(--fosshost-orange);
        transition: ease width 0.4s;
    }

    p.active {
        color: var(--fosshost-orange);
    }
</style>