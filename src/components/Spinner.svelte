<script lang="ts">
  // Sourced from: https://github.com/fosshostorg/aarch64/blob/main/frontend/src/components/Spinner.svelte
  export let style: string;
</script>

<div {style}>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>

<style>
  div {
    width: 4rem;
    height: 3rem;
    display: flex;
    align-items: center;
    transform: scale(80%, 80%);
  }
  span {
    display: flex;
    flex-grow: 1;
    height: 100%;
    background-color: var(--fosshost-black);
    margin-right: 2px;
    animation: loading ease-in-out 0.5s infinite alternate;
  }
  span:last-child {
    margin: 0px;
  }
  span:nth-child(1) {animation-delay: 0.0s;}
  span:nth-child(2) {animation-delay: 0.2s;}
  span:nth-child(3) {animation-delay: 0.4s;}
  span:nth-child(4) {animation-delay: 0.6s;}
  span:nth-child(5) {animation-delay: 0.8s;}
  @keyframes loading {
    from {height: 100%;}
    to {height: 30%;}
  }
</style>