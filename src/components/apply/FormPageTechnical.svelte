<script lang="ts">
    import { fade } from 'svelte/transition';
    import CheckboxGroup from './CheckboxGroup.svelte';
    import Input from './Input.svelte';
    export let data: FormResponse;
    export let currentPage: number;

    let options = [
        "X86 VPS",
        "Mirrors-as-a-service",
        "AArch64 VPS",
        "Email and Webhosting",
        "DNS",
        "Audio and Video Conferencing",
    ]

    let error = null;

</script>

<main in:fade={{delay: 0, duration: 400}}>
    <h1>Technical Information</h1>
    <p>We’d like to know more about the project you are working on. Please specify the necessary details below.</p>
    <CheckboxGroup {options} bind:selected={data.technical.services} label="Select the service(s) you are interested in" />
    {#if error}
    <span>{error}</span>
    {/if}
    <div class="buttons">
        <button class="back" on:click={() => {currentPage -= 1}}>Back</button>
        <button class="submit" on:click={() => {data.technical.services.length >= 1 ? currentPage += 1 : error = "Please choose at least one service."}}>Next</button>
    </div>
</main>


<style>
    span {
        margin: 0;
        height: 24px;
        font-size: 14px;
        color: red;
    }
</style>