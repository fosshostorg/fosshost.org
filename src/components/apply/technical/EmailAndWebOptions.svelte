<script context="module" lang="ts">
  export const validator = yup.object().shape({
      domain: yup.string().required(),
      requiresHosting: yup.boolean().required().nullable(),
      specialRequirements: yup.string(),
  })

  export const errorFormat = {
    domain: null,
    requiresHosting: null,
    specialRequirements: null,
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
    requiresHosting: null,
    specialRequirements: null,
  }

</script>

<main in:fade={{delay: 0, duration: 400}}>
  <span>
    <em>Email and Web Hosting Options:</em>
  </span>
  <Input on:blur={() => {errors = validate(validator, 'domain', data.technical["Email and Webhosting"], errors)}} error={errors.domain} label="Domain name: *" type="text" placeholder="What domain name will you be hosting?" bind:value={data.technical["Email and Webhosting"].domain}>
    <span slot="help">
      What domain would you like to host with us, please specify full domain with TLD e.g. example.com
    </span>
  </Input>
  <YesNoGroup label="Do you require DNS hosting? *" error={errors.requiresHosting} on:change={() => {errors = validate(validator, 'requiresHosting', data.technical["Email and Webhosting"], errors)}} bind:answer={data.technical["Email and Webhosting"].requiresHosting} />
  <Input on:blur={() => {errors = validate(validator, 'specialRequirements', data.technical["Email and Webhosting"], errors)}} error={errors.specialRequirements} label="Special Requirements" type="text" placeholder="Do you have any special requirements or comments to add?" bind:value={data.technical["Email and Webhosting"].specialRequirements} />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
  }
  
  span {
    line-height: normal;
    font-size: 14px;
    margin-bottom: 0.5rem;
    color: var(--fosshost-grey);
  }
</style>