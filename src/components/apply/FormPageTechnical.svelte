<script lang="ts">
    import Input from './Input.svelte';
    export let data: FormResponse;
    export let currentPage: number;
</script>

<main>
    <h1>Technical Information</h1>
    <p>We’d like to know more about the project you are working on. Please specify the necessary details below.</p>
    <div class="buttons">
        <button class="back" on:click={() => {currentPage -= 1}}>Back</button>
        <button class="submit" on:click={() => {currentPage += 1}}>Next</button>
    </div>
</main>


<style>
    
</style>