<script lang="ts">
    export let current: number = 0;
    export let pages: any[] = [];

    // TODO: Fix this so it doesn't skip things!
    // const handleClick = (index: number) => {
    //     console.log(index);
    //     for (let i = current+1; i < index; i++) {
    //         if (!pages[i].completed) {
    //             return;
    //         }
    //     }
    //     current = index+1;
    // }

</script>

<main>
    {#each pages as step, i}
    <div>
        <p class:active={current >= i+1}>{step.title}</p>
        <span class="bg"></span>
        <span class="bar" style={"width:" + (current >= i+1 ? "100%" : "0%")}></span>
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
        /* cursor: pointer; */
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