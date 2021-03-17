<script lang="ts">
    export let value: string = "";
    export let label: string = "Label";
    export let placeholder: string = "Enter your text...";
    export let name: string = "input";
    export let textarea: boolean = false;

</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label>
    {label}
    {#if textarea}
    <textarea bind:value {name} {placeholder} {...$$restProps} />
    {:else}
    <input bind:value {name} {placeholder} {...$$restProps} />
    {/if}
</label>

<style>
    label {
        display: flex;
        flex-direction: column;
        color: var(--fosshost-black);
        font-size: 18px;
        line-height: 24px;
    }

    input, textarea {
        font-size: 18px;
        line-height: 24px;
        padding: 0.5rem;
        border: 2px solid var(--fosshost-light-grey);
        border-radius: 4px;
        margin-top: 0.25rem;
        margin-bottom: 1rem;
    }

</style>