<script context="module" lang="ts">
  export const validator = yup.object().shape({
      domain: yup.string().required(),
  })

  export const errorFormat = {
    domain: null,
  }
</script>

<script lang="ts">
  import { fade } from 'svelte/transition';
  import Input from '../Input.svelte';
  import * as yup from 'yup';

  export let data: FormResponse;
  export let validate: any;

  export let errors = {
    domain: null,
  }

</script>

<main in:fade={{delay: 0, duration: 400}}>
  <span>
    <em>Domain Registration Options:</em>
  </span>
  <span>
    In order to better balance usage of domains, please only apply for domain name services if you have also applied for another Fosshost service.
  </span>
  <span>
    TLDs available: .com, .org., .net., tech, .website, .info. Please check that your domain is available for registration before submitting your application. There are various free to use, online public WHOIS tools available. If you do not check if your domain is available before submitting your request, this will delay your application. If you would like us to provide a sub domain to your project, we can offer subdomains of the following domains: *.sp.fyi, *.project.fossho.st
  </span>
  <span>
    For more information, read <a class="fosshost-link" href="https://docs.fosshost.org/products-and-services/domain-reg-management/" target="_blank">here</a>.
  </span>
  <Input on:blur={() => {errors = validate(validator, 'domain', data.technical["Domain Registration"], errors)}} error={errors.domain} label="Domain name: *" type="text" placeholder="What domain name would you like?" bind:value={data.technical["Domain Registration"].domain} />
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