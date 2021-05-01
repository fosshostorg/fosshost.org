<script lang="ts">
    export let options: any[];
    export let selected: any[];
    export let label: string;
    export let limit: boolean = false;
    export let error: string = "";


    const handleLimit = (e, val) => {
        if (selected.length > 1) {
            selected = [val]
        }
    }

</script>

<span class="label">{label}</span>
<div>
{#each options as option}
    <label class:checked={selected.includes(option)}>
        <input type="checkbox" bind:group={selected} value={option} on:change on:change={(e) => {limit ? handleLimit(e, option) : null}}/>
        {option}
    </label>
{/each}
</div>
{#if error}
<span class="error">{error}</span>
{/if}

<style>
    div {
        width: auto;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: flex-start;
        max-height: 10rem;
        margin-top: 1rem;
    }

    span.label {
        color: var(--fosshost-black);
        font-size: 18px;
        line-height: 24px;
    }

    span.error {
        margin: 0;
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
    }

    label:before {
        content: '';
        position: absolute;
        top: 0;
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