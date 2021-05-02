<script lang="ts">
    import { fade } from 'svelte/transition';
    import CheckboxGroup from './CheckboxGroup.svelte';
    import DNSOptions, { validator as DNSValidator, errorFormat as DNSErrors } from './technical/DNSOptions.svelte';
    import X86Options, { validator as X86Validator, errorFormat as X86Errors } from './technical/X86Options.svelte';
    import AArch64Options, { validator as AArch64Validator, errorFormat as AArch64Errors } from './technical/AArch64Options.svelte';
    import MirrorOptions, { validator as MirrorValidator, errorFormat as MirrorErrors } from './technical/MirrorOptions.svelte';
    import AudioVideoOptions, { validator as AudioVideoValidator, errorFormat as AudioVideoErrors } from './technical/AudioVideoOptions.svelte';

    import Input from './Input.svelte';
    export let data: FormResponse;
    export let pageValidate: any;
    export let validate: any;
    export let currentPage: number;

    let options = [
        "X86 VPS",
        "Mirrors-as-a-service",
        "AArch64 VPS",
        "Email and Webhosting",
        "DNS",
        "Audio and Video Conferencing",
    ]

    let error = null;

    let defaults = {
        "X86 VPS": {
            regions: [],
            IPv4Preference: "",
            vCPUs: "",
            memory: "",
            storage: "",
            os: "",
        },
        "Mirrors-as-a-service": {
            storage: "",
            specialRequirements: "",
        },
        "AArch64 VPS": {
            createdAccount: null,
        },
        "Email and Webhosting": {},
        "DNS": {
            domain: "",
            requiresHosting: null,
        },
        "Audio and Video Conferencing": {
            service: "",
        },
    }

    let components = {
        "X86 VPS":                      {c: X86Options, validator: X86Validator, errors: X86Errors},
        "Mirrors-as-a-service":         {c: MirrorOptions, validator: MirrorValidator, errors: MirrorErrors},
        "AArch64 VPS":                  {c: AArch64Options, validator: AArch64Validator, errors: AArch64Errors},
        "Email and Webhosting":         {c: DNSOptions, validator: DNSValidator, errors: []},
        "DNS":                          {c: DNSOptions, validator: DNSValidator, errors: DNSErrors},
        "Audio and Video Conferencing": {c: AudioVideoOptions, validator: AudioVideoValidator, errors: AudioVideoErrors},
    }
    
    $: if (data.technical.services) {
        for (let option of data.technical.services) {
            if (data.technical[option] == null) {
                data.technical[option] = defaults[option];
            }
        }

        for (let key of Object.keys(data.technical)) {
            if (!data.technical.services.includes(key as Service) && key != "services") {
                delete data.technical[key]
            }
        }
        
        console.log(data.technical);
    }

    const servicesError = () => {
        if (data.technical.services.length < 1) {
            error = "Please choose at least one service.";
        } else {
            error = "";
        }
    }

    const handleError = () => {
        servicesError();

        console.log(components)

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
        if (shouldChangePage) {
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