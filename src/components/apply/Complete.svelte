<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';
  export let data: FormResponse;
  export let currentPage: number;

</script>

<main in:fade={{delay: 0, duration: 400}}>
  <!-- <img src="/img/checkmark.svg" alt="checkmark" /> -->
  <h1>Your application has been successfully submitted!</h1>
  <p>
      You will be receiving an email regarding the details of your application shortly. Thank you!
  </p>
  <a class="accept" href="/">Back to Fosshost!</a>
</main>

<style>
  main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 1rem;
      height: 100%;
  }

  h1 {
      color: var(--fosshost-black);
      font-size: 40px;
      line-height: 47px;
      text-align: center;
      max-width: 600px;
  }

  p {
      font-size: 24px;
      line-height: 36px;
      text-align: center;
      max-width: 600px;
      color: var(--fosshost-grey);
  }

  a {
      width: 100%;
      max-width: 600px;
      padding: 1rem;
      margin: 0.25rem;
      border: none;
      font-size: 24px;
      border-radius: 4px;
      cursor: pointer;
      text-decoration: none;
      text-align: center;
  }

  a.accept {
      background: var(--fosshost-orange);
      color: white;
      font-weight: 700;
  }

  a:hover {
      text-decoration: underline;
  }
</style>