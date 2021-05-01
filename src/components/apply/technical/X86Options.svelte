<script context="module" lang="ts">
    export const validator = yup.object().shape({
        regions: yup.array().of(yup.string()).min(1).required(),
        IPv4Preference: yup.string().required(),
        vCPUs: yup.string().required(),
        memory: yup.string().required(),
        storage: yup.string().required(),
        os: yup.string().required(),
    })
  
    export const errorFormat = {
        regions: null,
        IPv4Preference: null,
        vCPUs: null,
        memory: null,
        storage: null,
        os: null,
    }
  </script>
  
  <script lang="ts">
      // @ts-nocheck
    import { fade } from 'svelte/transition';
    import Input from '../Input.svelte';
    export let data: FormResponse;
    export let validate: any;
    import * as yup from 'yup';
    import YesNoGroup from '../YesNoGroup.svelte';
    import CheckboxGroup from '../CheckboxGroup.svelte';
    
    export let errors = {
        regions: null,
        IPv4Preference: null,
        vCPUs: null,
        memory: null,
        storage: null,
        os: null,
    }

    let regionOptions = [
        "Chicago, US",
        "Los Angeles, US",
        "North Dallas, US",
        "Oregon, US",
        "London, UK"
    ]

    let ipv4Options = [
        "IPv6 only",
        "IPv4 only",
        "Both v4 and v6"
    ]


  
  </script>
  
  <main in:fade={{delay: 0, duration: 400}}>
    <span>
        X86 VPS Options:
    </span>
    <span>
        You may select one or more regions.   By default, we will provide one VM per region.  However, if you require multiple VMs deploying in the same region, please specify this at the end of the application in the comments section. This space lists regions where we have available capacity - apologies if your preferred region is not available today, we regularly review this and add new locations all the time.
    </span>
    <CheckboxGroup label="Which is your preferred region?" options={regionOptions} bind:selected={data.technical["X86 VPS"].regions} error={errors.regions} />
    <span>
        Due to a shortage of IPv4 space, we are currently reserving IPv4 for projects where IPv6 alone is not sufficient.  This does not apply to regions where IPv4 is only available.  Please advise us of your preference. 
    </span>
    <!-- NOTE: This selection gets mad with TypeScript -->
    <CheckboxGroup limit label="Please list your IPv4 preference:" options={ipv4Options} bind:selected={data.technical["X86 VPS"].IPv4Preference} error={errors.IPv4Preference} />
  </main>
  
  <style>
    main {
      display: flex;
      flex-direction: column;
    }
    
    span {
      margin-bottom: 0.5rem;
      color: var(--fosshost-grey);
    }
  </style>