<script context="module" lang="ts">
  export const validator = yup.object().shape({
    createdAccount: yup.boolean().required().nullable().oneOf([true])
  })

  export const errorFormat = {
    creaatedAccount: null,
  }
</script>

<script lang="ts">
  import { fade } from 'svelte/transition';
  import * as yup from 'yup';
  import YesNoGroup from '../YesNoGroup.svelte';

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
    <em>About AArch64:</em>
  </span>
  <span>
    Thanks for expressing an interest in an AArch64 Virtual Private Server.
    Along with finishing this application, you can now request Early BETA Access
    by creating an account at <a href="https://console.aarch64.com/#/signup" target="_blank" class="fosshost-link">AArch64</a>.
  </span>
  <YesNoGroup label="Have you created an AArch64 account? *" error={errors.createdAccount} bind:answer={data.technical["AArch64 VPS"].createdAccount} />
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