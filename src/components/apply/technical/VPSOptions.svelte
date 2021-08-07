<script context="module" lang="ts">
    export const validator = yup.object().shape({
      info: yup.string().required().min(150, 'description must be at least 150 characters'),
    })
  
    export const errorFormat = {
      creaatedAccount: null,
    }
  </script>
  
  <script lang="ts">
    import { fade } from 'svelte/transition';
    import * as yup from 'yup';
    import Input from '../Input.svelte';
  
    export let data: FormResponse;
    export let validate: any;
  
    export let errors = {
      createdAccount: null,
    }
  
    $: if (errors.createdAccount && errors.createdAccount.includes('true')) {
      errors.createdAccount = "You must create an AArch64 account to continue.";
    }
  </script>
  
  <main in:fade={{delay: 0, duration: 400}}>
    <span>
      <em>About VPS Applications:</em>
    </span>
    <span>
      We work with projects on an individual basis to decide what hardware best fits your needs. The more in-depth of a description you provide, the better we can understand what resources you'll need. If you have any hard requirements, feel free to list them. A member of our team can reach out if you're not sure about the resources you'll need for your project.
    </span>
    <Input textarea minCharacters={150} on:blur={() => {errors = validate(validator, 'info', data.technical["VPS"], errors)}} error={errors.info} label="How will this VPS be used to support your project?" type="text" placeholder="Tell us about your needs" bind:value={data.technical["VPS"].info} />
  </main>
  
  <style>
    main {
      display: flex;
      flex-direction: column;
    }
    
    span {
      margin-bottom: 1rem;
      color: var(--fosshost-grey);
    }
  </style>