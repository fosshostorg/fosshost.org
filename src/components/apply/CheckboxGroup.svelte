<script lang="ts">
    export let options: any[];
    export let selected: any[];
    export let label: string;
</script>

<span>{label}</span>
<div>
{#each options as option}
    <label class:checked={selected.includes(option)}>
        <input type="checkbox" bind:group={selected} value={option}/>
        {option}
    </label>
{/each}
</div>

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

    span {
        color: var(--fosshost-black);
        font-size: 18px;
        line-height: 24px;
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