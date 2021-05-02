<script context="module" lang="ts">
  export const validator = yup.object().shape({
      domain: yup.string().required(),
      requiresHosting: yup.boolean().required().nullable()
  })

  export const errorFormat = {
    domain: null,
    requiresHosting: null
  }
</script>

<script lang="ts">
  import { fade } from 'svelte/transition';
  import Input from '../Input.svelte';
  export let data: FormResponse;
  export let validate: any;
  import * as yup from 'yup';
  import YesNoGroup from '../YesNoGroup.svelte';

  export let errors = {
    domain: null,
    requiresHosting: null
  }

</script>

<main in:fade={{delay: 0, duration: 400}}>
  <span>
    <em>DNS Options:</em>
  </span>
  <span>
    TLDs available: .com, .org., .net., tech, .website, .io, .info. All domains subject to status and availability. If you would like us to provide a sub domain to your project, we can offer subdomains of the following domains: *.sp.fyi, *.project.fossho.st
  </span>
  <Input on:blur={() => {errors = validate(validator, 'domain', data.technical["DNS"], errors)}} error={errors.domain} label="Domain name: *" type="text" placeholder="What domain name would you like?" bind:value={data.technical["DNS"].domain} />
  <YesNoGroup label="Do you require DNS hosting? *" error={errors.requiresHosting} on:change={() => {errors = validate(validator, 'requiresHosting', data.technical["DNS"], errors)}} bind:answer={data.technical["DNS"].requiresHosting} />
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