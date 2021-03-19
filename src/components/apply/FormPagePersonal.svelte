<script lang="ts">
    import { fade } from 'svelte/transition';
    import Input from './Input.svelte';
    export let data: FormResponse;
    export let currentPage: number;
</script>

<main in:fade={{delay: 0, duration: 400}}>
    <h1>Personal Information</h1>
    <p>Please note that we need your full name and contact detail in order to process your application.</p>
    <Input label="Full name" type="text" placeholder="What's your name" bind:value={data.personal.name} />
    <Input label="Email" type="email" placeholder="youremail@company.com" bind:value={data.personal.email} />
    <div class="buttons">
        <button class="submit" on:click={() => {currentPage += 1}}>Next</button>
    </div>
</main>


<style>

</style>