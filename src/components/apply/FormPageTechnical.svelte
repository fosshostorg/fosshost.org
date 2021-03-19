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

</script>

<main in:fade={{delay: 0, duration: 400}}>
    <h1>Technical Information</h1>
    <p>We’d like to know more about the project you are working on. Please specify the necessary details below.</p>
    <CheckboxGroup {options} bind:selected={data.technical.services} label="Select the service(s) you are interested in" />
    <div class="buttons">
        <button class="back" on:click={() => {currentPage -= 1}}>Back</button>
        <button class="submit" on:click={() => {currentPage += 1}}>Next</button>
    </div>
</main>


<style>

</style>