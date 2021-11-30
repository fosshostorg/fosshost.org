<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { fade } from 'svelte/transition';
    export let data: FormResponse;
    export let currentPage: number;

    const handleClick = (): void => {
        data.security.hasAcceptedCriteria = true;
        currentPage += 1;
    }

    const formDisabled: boolean = true;
</script>

<main in:fade={{delay: 0, duration: 400}}>
    {#if formDisabled}
        <h1>Thank you for your interest in Fosshost</h1>
        <p>
            Unfortunately, applications for our services are temporarily suspended. To read more about the situation, click
            <a href="/news/applications-temporarily-suspended" class="fosshost-link"><b>here</b></a>.
        </p>
        <button class="accept" on:click={() => {window.location.href = "/"}}>Back to home</button>
    {:else}
        <h1>Thank you for your interest in Fosshost</h1>
        <p>
            Before we proceed with your application, please confirm that you have read and understood the
            <a href="https://docs.fosshost.org/general/application" target="_blank" class="fosshost-link"><b>Eligibility Criteria</b></a>.
        </p>
        <button class="accept" on:click={handleClick}>I accept</button>
        <button class="cancel" on:click={() => {window.location.href = "/"}}>I don't accept</button>
    {/if}
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 1rem;
        height: 100%;
    }

    h1 {
        color: var(--fosshost-black);
        font-size: 40px;
        line-height: 47px;
        text-align: center;
        max-width: 600px;
    }

    p {
        font-size: 24px;
        line-height: 36px;
        text-align: center;
        max-width: 600px;
        color: var(--fosshost-grey);
    }

    button {
        width: 100%;
        max-width: 600px;
        padding: 1rem;
        margin: 0.25rem;
        border: none;
        font-size: 24px;
        border-radius: 4px;
        cursor: pointer;
    }

    button.accept {
        background: var(--fosshost-orange);
        color: white;
        font-weight: 700;
    }

    button.cancel {
        color: var(--fosshost-orange);
        background: white;
    }

    button:hover {
        text-decoration: underline;
    }
</style>
