<script lang="ts">
  export let page;
  export let totalPages;
</script>

<div>
  <!-- {#each new Array(totalPages) as num}
        <span>
            {num}
        </span>
    {/each} -->
  <button
    disabled={page === 0}
    class:disabled={page === 0}
    on:click={() => {
      if (page > 0) page--;
    }}
  >
    back
  </button>
  <span>
    {page+1} / {totalPages+1}
  </span>
  <button
    disabled={page === totalPages}
    class:disabled={page === totalPages}
    on:click={() => {
      if (page < totalPages) page++;
    }}
  >
    next
  </button>
</div>

<style>
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5rem;
    color: #787878;
    padding: 5rem 0rem;
  }

  span {
    font-size: 1.4rem;
    padding: 0rem 2rem;
  }

  button {
    border: none;
    font-size: 22px;
    color: #000000;
    padding: 0.2rem 2rem;
    cursor: pointer;
    background-color: #fff;
    border: 2px solid #000000;
    transition: ease all 0.3s;
  }

  button:hover:not(.disabled) {
    background-color: #f1f1f1;
  }

  button.disabled {
    color: #aaaaaa;
    border: 2px solid #aaa;
    cursor: default;
  }

  @media (max-width: 750px) {
    span {
      font-size: 1.25rem;
    }
  }
</style>
