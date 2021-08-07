<script lang="ts">
    import { fade } from 'svelte/transition';
    import CheckboxGroup from './CheckboxGroup.svelte';
    import DNSOptions, { validator as DNSValidator, errorFormat as DNSErrors } from './technical/DNSOptions.svelte';
    import VPSOptions, { validator as VPSValidator, errorFormat as VPSErrors } from './technical/VPSOptions.svelte';
    import MirrorOptions, { validator as MirrorValidator, errorFormat as MirrorErrors } from './technical/MirrorOptions.svelte';

    export let data: FormResponse;
    export let pageValidate: any;
    export let validate: any;
    export let currentPage: number;

    let options = [
        "VPS",
        "Mirrors-as-a-service",
        "Domain Name and DNS",
    ]

    let error = null;

    let defaults = {
        "VPS": {
            info: "",
        },
        "Mirrors-as-a-service": {
            storage: "",
            rsyncURL: "",
            specialRequirements: "",
        },
        "Domain Name and DNS": {
            domain: "",
            requiresHosting: null,
        },
    }

    let components = {
        "VPS":                          {c: VPSOptions, validator: VPSValidator, errors: VPSErrors},
        "Mirrors-as-a-service":         {c: MirrorOptions, validator: MirrorValidator, errors: MirrorErrors},
        "Domain Name and DNS":          {c: DNSOptions, validator: DNSValidator, errors: DNSErrors},
    }
    
    $: if (data.technical.services) {
        for (let option of data.technical.services) {
            if (data.technical[option] == null) {
                // @ts-ignore
                data.technical[option] = defaults[option];
            }
        }

        for (let key of Object.keys(data.technical)) {
            if (!data.technical.services.includes(key as Service) && key != "services") {
                delete data.technical[key]
            }
        }
    }

    const servicesError = () => {
        if (data.technical.services.length < 1) {
            error = "Please choose at least one service.";
        } else if (data.technical.services.includes("Domain Name and DNS") && data.technical.services.length == 1) {
            error = "Domain name services are only offered in addition to the use of another service."
        } else {
            error = "";
        }
    }

    const handleError = () => {
        servicesError();

        let shouldChangePage: boolean = true;
        for (const c of data.technical.services) {
            components[c].errors = pageValidate(components[c].validator, data.technical[c], components[c].errors, false);
            for (const field of Object.keys(components[c].errors)) {
                if (components[c].errors[field] !== "" && components[c].errors[field] !== null) {
                    shouldChangePage = false;
                    break;
                }
            }
        }
        if (shouldChangePage && error == "") {
            currentPage++;
        }
    }

</script>

<main in:fade={{delay: 0, duration: 400}}>
    <h1>Technical Information</h1>
    <p>We’d like to know more about the project you are working on. Please specify the necessary details below.</p>
    <CheckboxGroup on:change={servicesError} {options} bind:selected={data.technical.services} {error} label="Select the service(s) you are interested in" />
    {#each data.technical.services as service}
        <svelte:component this={components[service].c} bind:currentPage {data} {pageValidate} {validate} errors={components[service].errors} />
    {/each}
    <div class="buttons">
        <button class="back" on:click={() => {currentPage -= 1}}>Back</button>
        <button class="submit" on:click={handleError}>Next</button>
    </div>
</main>


<style>

</style>