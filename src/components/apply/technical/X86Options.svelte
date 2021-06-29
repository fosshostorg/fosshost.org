<script context="module" lang="ts">
  export const validator = yup.object().shape({
    regions: yup.array().of(yup.string()).min(1).required(),
    IPv4Preference: yup.string().required(),
    vCPUs: yup.string().required(),
    memory: yup.string().required(),
    storage: yup.string().required(),
    os: yup.string().required(),
    specialRequirements: yup.string(),
  });

  export const errorFormat = {
    regions: null,
    IPv4Preference: null,
    vCPUs: null,
    memory: null,
    storage: null,
    os: null,
    specialRequirements: null,
  };
</script>

<script lang="ts">
  // @ts-nocheck
  import { fade } from "svelte/transition";
  import Input from "../Input.svelte";
  import * as yup from "yup";
  import CheckboxGroup from "../CheckboxGroup.svelte";

  export let data: FormResponse;
  export let validate: any;

  export let errors = {
    regions: null,
    IPv4Preference: null,
    vCPUs: null,
    memory: null,
    storage: null,
    os: null,
    specialRequirements: null,
  };

  let regionOptions = [
    "London, UK",
    "Amsterdam, NL",
    "West Coast, US",
    "Midwest, US",
    "East Coast, US",
  ];

  let ipv4Options = ["IPv6 only", "IPv4 only", "Both v4 and v6"];

  let vCPUOptions = ["2 cores", "4 cores", "8 cores"];

  let memoryOptions = ["2GB", "4GB", "6GB", "8GB"];

  let storageOptions = ["50GB", "100GB", "200GB", "300GB", "400GB"];

  let osOptions = ["Debian", "Rocky Linux", "Ubuntu", "FreeBSD", "ArchLinux", "Other / Personal"]
</script>

<main in:fade={{ delay: 0, duration: 400 }}>
  <span><em>x86 VPS Options:</em></span>
  <span>
    You may select one or more regions. By default, we will provide one VM per
    region. However, if you require multiple VMs deploying in the same region,
    please specify this at the end of the application in the comments section.
    This space lists regions where we have available capacity - apologies if
    your preferred region is not available today, we regularly review this and
    add new locations all the time.
  </span>
  <CheckboxGroup
    label="Which is your preferred region? *"
    options={regionOptions}
    bind:selected={data.technical["x86 VPS"].regions}
    error={errors.regions}
  />
  <span>
    Due to a shortage of IPv4 space, we are currently reserving IPv4 for
    projects where IPv6 alone is not sufficient. This does not apply to regions
    where IPv4 is only available. Please advise us of your preference.
  </span>
  <!-- NOTE: This selection gets mad with TypeScript -->
  <CheckboxGroup
    limit
    label="Please list your IPv4 preference: *"
    options={ipv4Options}
    bind:selected={data.technical["x86 VPS"].IPv4Preference}
    error={errors.IPv4Preference}
  />

  <span><em>x86 VPS Specifications:</em></span>
  <span>
    We have recently changed our policy of offering default VM specifications.
    This is because in some cases our default specification was too excessive.
    We now give projects the ability to request number of vCores, Memory and
    Disk. Your request is not guaranteed but reviewed as part of your overall
    application. If we approve, but cannot provide your exacting requirements,
    we will make a counter offer.
  </span>
  <CheckboxGroup
    limit
    label="How many vCPUs do you require? *"
    options={vCPUOptions}
    bind:selected={data.technical["x86 VPS"].vCPUs}
    error={errors.vCPUs}
  />
  <CheckboxGroup
    limit
    label="How much memory do you require? *"
    options={memoryOptions}
    bind:selected={data.technical["x86 VPS"].memory}
    error={errors.memory}
  />
  <CheckboxGroup
    limit
    label="How much storage do you require? *"
    options={storageOptions}
    bind:selected={data.technical["x86 VPS"].storage}
    error={errors.storage}
  />
  <CheckboxGroup
    limit
    label="Which OS would you prefer? *"
    options={osOptions}
    bind:selected={data.technical["x86 VPS"].os}
    error={errors.os}
  />
  <Input on:blur={() => {errors = validate(validator, 'specialRequirements', data.technical["x86 VPS"], errors)}} error={errors.specialRequirements} label="Special Requirements" type="text" placeholder="Do you have any special requirements or comments to add?" bind:value={data.technical["x86 VPS"].specialRequirements} />

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
