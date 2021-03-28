<script lang="ts">
    import Eligibility from './Eligibility.svelte';
    import FormPagePersonal from './FormPagePersonal.svelte';
    import FormPageProject from './FormPageProject.svelte';
    import FormPageTechnical from './FormPageTechnical.svelte';
    import Security from './Security.svelte';
    import Complete from './Complete.svelte';
    import Stepper from './Stepper.svelte';
    import * as yup from 'yup';
    import { onMount } from 'svelte';

    let data: FormResponse = {
        security: {
            hasAcceptedCriteria: false,
            criteriaQuestionResponse: "",
        },
        personal: {
            name: "",
            email: "",
        },
        project: {
            name: "",
            description: "",
            role: "",
            site: "",
        },
        technical: {
            services: [],
        }
    }
    let currentPage: number = 0;

    let components: any[] = [Eligibility, FormPagePersonal, FormPageProject, FormPageTechnical, Security, Complete];
    let steps = [
        "Personal Information",
        "Project Information",
        "Technical Specifications",
        "Security Question"
    ]

    let pages: {title: string, completed: boolean}[] = []; 
    components.forEach((c, i) => {
        if (i == 0 || i == components.length-1) {
            return;
        }
        pages.push({title: steps[i-1], completed: false});
    })
    
    const validate = (validator: any, field: string, value: any, errors: any): any => {
        try {
            validator.validateSyncAt(field, value)
            errors[field] = null;
            return errors;
        } catch (err) {
            errors[field] = err.message;
            return errors;
        }
    }

    const pageValidate = (validator: any, value: any, errors: any): any => {
        try {
            validator.validateSync(value, { abortEarly: false })
            window.sessionStorage.setItem('form_data', JSON.stringify(data))
            currentPage += 1;
        } catch (err) {
            for (const error of err.inner) {
                errors[error.path] = error.message;
            }
            return errors;
        }
    }

    onMount(() => {
        if (window.sessionStorage.getItem('form_data')) {
            data = JSON.parse(window.sessionStorage.getItem('form_data'))
        }
    })

</script>

{#if currentPage < components.length-1} 
    <Stepper bind:current={currentPage} bind:pages={pages} />
{/if}
<main>
    <svelte:component this={components[currentPage]} bind:currentPage {data} {pageValidate} {validate} />
    {#if currentPage !== 0 && currentPage < components.length-1}
    <a class="fosshost-link" href="/" on:click={() => {window.sessionStorage.removeItem('form_data');}}>Cancel my application</a>
    {/if}
</main>

<style>
    main {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
    }

    main :global(h1) {
        text-align: center;
        margin-top: 2rem;
    }

    main :global(p) {
        text-align: center;
        margin: 0 auto 1rem;
        font-size: 18px;
        line-height: 24px;
        color: var(--fosshost-grey);
    }

    main :global(div.buttons) {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    main :global(button.submit, button.back) {
        display: flex;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
        color: white;
        background-color: var(--fosshost-orange);
        border: 2px solid var(--fosshost-orange);
        border-radius: 6px;
        font-size: 18px;
        line-height: 27px;
        font-weight: 600;
        padding: 6px 0;
        cursor: pointer;
        max-width: 28rem;
        margin: 2rem 0 0;
    }

    main :global(button.back) {
        margin-right: 1rem; 
        color: var(--fosshost-orange);
        background-color: white;
    }

    main :global(button.back ~ button) {
        margin-left: 1rem;
    }

    a {
        margin: 1.5rem auto 0;
    }
</style>

