<script lang="ts">
    import { fade } from 'svelte/transition';
    import Input from './Input.svelte';
    export let data: FormResponse;
    export let currentPage: number;
</script>

<main in:fade={{delay: 0, duration: 400}}>
    <h1>Security Question</h1>
    <p>
        To prevent fraudulent and spam  appplications and to verify that applications/projects have taken the time to read the Eligibility Criteria,
        please confirm the piece of information we asked you to write down when you read our documentation. This is not a trick question and is used
        to established that you have read our documentation properly. <br><br> <em>Please note that we will immediately reject any applications where this 
        information is not provided to us.</em>
    </p>
    <Input label="Eligibility Criteria Question" placeholder="Enter the necessary response" bind:value={data.security.criteriaQuestionResponse} />
    <div class="buttons">
        <button class="back" on:click={() => {currentPage -= 1}}>Back</button>
        <button class="submit" on:click={() => {currentPage += 1}}>Submit</button>
    </div>
</main>


<style>
    em {
        font-style: normal;
        text-decoration: underline;
    }

    p {
        padding-bottom: 1rem;
    }
</style>