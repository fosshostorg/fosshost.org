<script context="module" lang="ts">
  export const validator = yup.object().shape({
    storage: yup.string().required(),
    rsyncURL: yup.string().required(),
    specialRequirements: yup.string(),
  })

  export const errorFormat = {
    storage: null,
    rsyncURL: null,
    specialRequirements: null,
  }
</script>

<script lang="ts">
  import { fade } from 'svelte/transition';
  import Input from '../Input.svelte';
  import * as yup from 'yup';

  export let data: FormResponse;
  export let validate: any;

  export let errors = {
    storage: null,
    rsyncURL: null,
    specialRequirements: null,
  }

</script>

<main in:fade={{delay: 0, duration: 400}}>
  <span>
    <em>Mirrors-as-a-service Options:</em>
  </span>
  <Input on:blur={() => {errors = validate(validator, 'storage', data.technical["Mirrors-as-a-service"], errors)}} error={errors.storage} label="Storage Requirements *" type="text" placeholder="Please list your storage requirements" bind:value={data.technical["Mirrors-as-a-service"].storage}>
    <span slot="help">
      Please provide the storage in GB/TB required to run mirrors for your project and the source of where we will synchronize from. We only support rsync.
    </span>
  </Input>
  <Input on:blur={() => {errors = validate(validator, 'rsyncURL', data.technical["Mirrors-as-a-service"], errors)}} error={errors.rsyncURL} label="rsync URL" type="text" placeholder="rsync://project-mirror" bind:value={data.technical["Mirrors-as-a-service"].rsyncURL} />
  <Input on:blur={() => {errors = validate(validator, 'specialRequirements', data.technical["Mirrors-as-a-service"], errors)}} error={errors.specialRequirements} label="Special Requirements" type="text" placeholder="Do you have any special requirements or comments to add?" bind:value={data.technical["Mirrors-as-a-service"].specialRequirements} />

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