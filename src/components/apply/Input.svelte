<script lang="ts">
    export let value: string = "";
    export let label: string = "Label";
    export let placeholder: string = "Enter your text...";
    export let name: string = "input";
    export let textarea: boolean = false;
    export let error: string = null;
    export let minCharacters: number = null;
    export let maxCharacters: number = null;
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label>
    {label}
    <slot name="help" />
    {#if minCharacters}
    <span class="chars">{value.length} / {minCharacters} character minimum.</span>
    {:else if maxCharacters}
    <span class="chars">{value.length} / {maxCharacters} character maximum.</span>
    {/if}
    {#if textarea}
    <textarea class:error on:blur bind:value on:change {name} {placeholder} {...$$restProps} />
    {:else}
    <input class:error on:blur bind:value on:change {name} {placeholder} {...$$restProps} />
    {/if}
    <span class="err">
        {error ? error : ''}
    </span>
</label>

<style>
    label {
        display: flex;
        flex-direction: column;
        color: var(--fosshost-black);
        font-size: 18px;
        line-height: 24px;
        margin-bottom: .25rem;
    }

    input, textarea {
        font-size: 18px;
        line-height: 24px;
        padding: 0.5rem;
        border: 2px solid var(--fosshost-light-grey);
        border-radius: 4px;
        margin-top: 0.25rem;
    }

    textarea {
        max-width: calc(100% - 4px - 1rem);
    }

    span.err {
        margin: 0;
        min-height: 24px;
        font-size: 14px;
        color: red;
    }

    .error {
        border: 2px solid red;
    }

    span.chars {
        line-height: normal;
        font-size: 14px;
        margin-bottom: 0.5rem;
        color: var(--fosshost-grey);
    }

</style>