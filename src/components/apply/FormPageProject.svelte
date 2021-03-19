<script lang="ts">
    import { fade } from 'svelte/transition';
    import Input from './Input.svelte';
    export let data: FormResponse;
    export let currentPage: number;
</script>

<main in:fade={{delay: 0, duration: 400}}>
    <h1>Project Information</h1>
    <p>We’d like to know more about the project you are working on. Please specify the necessary details below.</p>
    <Input label="Project name" type="text" placeholder="What's your project called" bind:value={data.project.name} />
    <Input textarea label="Tell us about your project" type="text" placeholder="Describe your project here" bind:value={data.project.description} />
    <Input label="What's your role in the project?" type="text" placeholder="Supervisor, developer, manager, etc." bind:value={data.project.role} />
    <Input label="Your website or git address" type="text" placeholder="https://myfossproject.com" bind:value={data.project.site} />
    <div class="buttons">
        <button class="back" on:click={() => {currentPage -= 1}}>Back</button>
        <button class="submit" on:click={() => {currentPage += 1}}>Next</button>
    </div>
</main>


<style>

</style>