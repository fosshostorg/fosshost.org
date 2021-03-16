<script lang="ts">
    export let value: string = "";
    export let label: string = "Label";
    export let placeholder: string = "Enter your text...";
    export let name: string = "input";

</script>

<label>
    {label}
    <input bind:value {name} {placeholder} {...$$restProps} />
</label>

<style>
    label {
        display: flex;
        flex-direction: column;
        color: var(--fosshost-black);
        font-size: 18px;
        line-height: 24px;
    }

    input {
        font-size: 18px;
        line-height: 24px;
        padding: 0.5rem;
        border: 2px solid var(--fosshost-light-grey);
        border-radius: 4px;
        margin-top: 0.25rem;
    }

</style>