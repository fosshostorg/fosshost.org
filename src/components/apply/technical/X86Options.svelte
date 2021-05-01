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


  
  </script>
  
  <main in:fade={{delay: 0, duration: 400}}>
    <span>
        X86 VPS Options:
    </span>
    <CheckboxGroup label="Which is your preferred region?" options={regionOptions} bind:selected={data.technical["X86 VPS"].regions} error={errors.regions} />
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