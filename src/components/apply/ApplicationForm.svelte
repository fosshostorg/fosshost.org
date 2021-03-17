<script lang="ts">
    import Eligibility from './Eligibility.svelte';
    import FormPagePersonal from './FormPagePersonal.svelte';
    import FormPageProject from './FormPageProject.svelte';
    import FormPageTechnical from './FormPageTechnical.svelte';
    import Security from './Security.svelte';
    import Stepper from './Stepper.svelte';
    
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
            service: null,
        }
    }
    console.log(data);

    let components: any[] = [Eligibility, FormPagePersonal, FormPageProject, FormPageTechnical, Security];
    let currentPage: number = 0;

</script>

<Stepper current={currentPage-1} />
<main>
    <svelte:component this={components[currentPage]} bind:currentPage {data} />
</main>

<style>
    main {
        width: auto;
        max-width: 600px;
        margin: 0 auto;
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
</style>

