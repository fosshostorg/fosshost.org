<script context="module">
  export function load({ error, status }) {
    return {
      props: {
        error,
        status,
      },
    };
  }
  const dev = process.env.NODE_ENV === "development";
</script>

<script lang="ts">
  import "../news.css";
  export let status;
  export let error;
</script>

<svelte:head>
  <title>Fosshost - {status}</title>
</svelte:head>
{#if status == 404}
  <main class="error">
    <h1>{status}</h1>
    <h2>The page you are looking for can't be found.</h2>
    <img src="/img/illustration3.png" alt="404 Illustration" />
  </main>
{:else}
  <main class="error">
    <h1>{status}</h1>
    {error.message}
  </main>
{/if}

{#if dev && error.stack}
  <pre class="error">{error.stack}</pre>
{/if}
