<script lang="ts">
    import Eligibility from './Eligibility.svelte';
    import FormPagePersonal from './FormPagePersonal.svelte';
    import FormPageProject from './FormPageProject.svelte';
    import FormPageTechnical from './FormPageTechnical.svelte';
    import Security from './Security.svelte';
    import Stepper from './Stepper.svelte';
    import * as yup from 'yup';
    
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
    console.log(data);

    let components: any[] = [Eligibility, FormPagePersonal, FormPageProject, FormPageTechnical, Security];
    let steps = [
        "Personal Information",
        "Project Information",
        "Technical Specifications",
        "Security Question"
    ]
    let pages: {title: string, completed: boolean}[] = []; 
    components.forEach((c, i) => {
        if (i == 0) {
            return;
        }
        pages.push({title: steps[i-1], completed: false});
    })
    let currentPage: number = 0;


    const validate = (validator: any, field: string, value: any, errors: any): any => {
        console.log(field, value);
        try {
            validator.validateSyncAt(field, value)
            errors[field] = null;
            return errors;
        } catch (err) {
            errors[field] = err.message;
            console.log(err.message);
            return errors;
        }
    }

    const pageValidate = (validator: any): void => {
        validator
            .validate(data.personal, { abortEarly: false })
            .then(() => {
                currentPage += 1;
            })
            .catch(errs => {
                console.log(errs.inner)
                // will be caught already
            })
    }


</script>

<Stepper bind:current={currentPage} bind:pages={pages} />
<main>
    <svelte:component this={components[currentPage]} bind:currentPage {data} {pageValidate} {validate} />
    {#if currentPage !== 0}
    <a class="fosshost-link" href="/" on:click={() => {data = null;}}>Cancel my application</a>
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

