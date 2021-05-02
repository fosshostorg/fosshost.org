<script context="module" lang="ts">
  export const validator = yup.object().shape({
      service: yup.string().required(),
      specialRequirements: yup.string(),
  })

  export const errorFormat = {
    service: null,
    specialRequirements: null,
  }
</script>

<script lang="ts">
  // @ts-nocheck
  import { fade } from 'svelte/transition';
  import Input from '../Input.svelte';
  export let data: FormResponse;
  export let validate: any;
  import * as yup from 'yup';
  import CheckboxGroup from '../CheckboxGroup.svelte';

  export let errors = {
    service: null,
    specialRequirements: null,
  }

  let AVoptions = [
    "BigBlueButton (BBB)",
    "Jitsi"
  ]

</script>

<main in:fade={{delay: 0, duration: 400}}>
  <span>
    <em>Audio and Video Conferencing Options:</em>
  </span>
  <span>
    We can provide hosted and managed BigBlueButton (BBB) and Jitsi hosting.  Both offer video and audio hosted conferencing facilities for small or large conferences and online events.
  </span>
  <CheckboxGroup
    limit
    label="Please select your service preference: *"
    options={AVoptions}
    bind:selected={data.technical["Audio and Video Conferencing"].service}
    error={errors.service}
  />
  <Input on:blur={() => {errors = validate(validator, 'specialRequirements', data.technical["Audio and Video Conferencing"], errors)}} error={errors.specialRequirements} label="Special Requirements" type="text" placeholder="Do you have any special requirements or comments to add?" bind:value={data.technical["Audio and Video Conferencing"].specialRequirements} />
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