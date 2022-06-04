<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { fade } from 'svelte/transition';
import Arrow from '../Arrow.svelte';
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
        <h1>Thank you for your interest in Fosshost!</h1>
        <p>
            Unfortunately, applications for our services are temporarily suspended. To read more about the situation, click
            <a href="/news/applications-temporarily-suspended" class="fosshost-link"><b>here</b></a>.
        </p>
        <button class="accept" on:click={() => {window.location.href = "/"}}>Back to home</button>
    {:else}
        <h1>Thank you for your interest in Fosshost!</h1>
        <p>
            Before we proceed with your application, please confirm that you have read and understood the
            <a href="https://docs.fosshost.org/general/application" target="_blank" class="fosshost-link"><b>Eligibility Criteria</b></a>.
            <br>
            <br>
            Questions about applying to Fosshost? Join our discord at <a href="https://discord.gg/foss" target="_blank" class="fosshost-link"><b>discord.gg/foss</b></a>.
        </p>
        <button class="accept" on:click={handleClick}>
            <span style="margin-right: 1rem;">I accept </span>
            <Arrow width="20px" height="20px" color="white" /></button>
        <button class="cancel" on:click={() => {window.location.href = "/"}}>I don't accept</button>
    {/if}
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 1rem auto;
        height: 100%;
        width: 100%;
        max-width: var(--content-max-width);
    }

    h1 {
        box-sizing: border-box;
        color: white;
        background-color: var(--fosshost-text-black);
        font-size: 36px;
        line-height: 47px;
        text-align: center;
        padding: 1rem;
        width: 100%;
    }

    p {
        font-size: 20px !important;
        text-align: center;
        color: var(--fosshost-text-black);
        margin: 1rem 0rem;
        width: 100%;
        border: 2px solid var(--fosshost-border-black);
        padding: 2rem;
        box-sizing: border-box;
    }

    button {
        width: 100%;
        padding: 0.5rem 2rem;
        margin: 0.25rem;
        border: 2px solid var(--fosshost-border-black);
        font-size: 22px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        transition: ease border-right-width 0.5s;
    }

    button.accept {
        background: var(--fosshost-orange);
        color: white;
        font-weight: 700;
    }

    button.cancel {
        background: white;
    }

    button:hover {
        text-decoration: underline;
        border-right-width: 2rem;
    }
</style>
