<script lang="ts">
    import Eligibility from './Eligibility.svelte';
    import FormPagePersonal from './FormPagePersonal.svelte';
    import FormPageProject from './FormPageProject.svelte';
    import FormPageTechnical from './FormPageTechnical.svelte';
    import Security from './Security.svelte';
    
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

<svelte:component this={components[currentPage]} on:forward={() => {currentPage += 1}} {data}/>

<style>

</style>
