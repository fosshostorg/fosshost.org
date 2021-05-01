<script lang="ts">
    export let options: any[];
    export let selected: any[];
    export let label: string;
    export let limit: boolean = false;
    export let error: string = "";


    // const handleLimit = (e, val) => {
    //     if (selected.length > 1) {
    //         selected = [val]
    //     }
    // }

</script>

<span class="label">{label}</span>
<div>
{#each options as option}
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label class:checked={selected.includes(option)}>
        {#if limit}
            <input type="radio" bind:group={selected} value={option} on:change />
        {:else}
            <input type="checkbox" bind:group={selected} value={option} on:change />
        {/if}
        {option}
    </label>
{/each}
</div>
{#if error}
<span class="error">{error}</span>
{/if}
<span class="padding"></span>

<style>
    div {
        -webkit-columns: 2;
        -moz-columns: 2;
        columns: 2;
        margin-top: 1rem;
        position: relative;
    }

    span.padding {
        display: flex;
        width: 100%;
        height: 1.5rem;
        /* margin-bottom: 1.5rem; */
    }

    span.label {
        color: var(--fosshost-black);
        font-size: 18px;
        line-height: 24px;
    }

    span.error {
        margin: 0;
        margin-top: .5rem;
        height: 24px;
        font-size: 14px;
        color: red;
    }

    input {
        display: none;
    }

    label {
        height: 24px;
        padding-left: 2.3rem;
        display: flex;
        position: relative;
        align-items: center;
        font-size: 18px;
        line-height: 24px;
        color: var(--fosshost-grey);
        margin: 0 1rem 1rem 0;
        cursor: pointer;
        list-style-position: inside;
        -webkit-column-break-inside: avoid;
        page-break-inside: avoid;
        break-inside: avoid;
    }

    label:before {
        content: '';
        position: absolute;
        left: 0;
        width: 20px;
        height: 20px;
        border: 2px solid var(--fosshost-light-grey);
        border-radius: 2px;
    }

    label.checked:before {
        background-color: var(--fosshost-light-grey);
    }

    label.checked:after {
        content: '';
        width: 12px;
        height: 4px;
        position: absolute;
        top: 10px;
        left: 6px;
        background-color: white;
    }

</style>