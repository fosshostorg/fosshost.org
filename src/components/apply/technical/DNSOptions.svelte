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
  <Input on:blur={() => {errors = validate(validator, 'domain', data.technical["DNS"], errors)}} error={errors.domain} label="Domain name" type="text" placeholder="What domain name would you like?" bind:value={data.technical["DNS"].domain} />
  <YesNoGroup label="Do you require hosting?" error={errors.requiresHosting} on:change={() => {errors = validate(validator, 'requiresHosting', data.technical["DNS"], errors)}} bind:answer={data.technical["DNS"].requiresHosting} />
    <!-- <Input on:blur={() => {errors = validate(validator, 'description', data.technical.dns, errors)}} error={errors.description} textarea label="Tell us about your project" type="text" placeholder="Describe your project here" bind:value={data.project.description} /> -->
</main>


<style>

</style>