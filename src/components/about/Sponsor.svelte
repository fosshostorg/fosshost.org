<script lang="ts">
  export let sponsor: Sponsor;
</script>

<a href={sponsor.link} target="_blank">
  <span class="title">
    {sponsor.name}
  </span>
</a>

<style>
  a {
    display: flex;
    flex-direction: column;
    color: black;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    background: #f4f4f4;
    border-radius: 18px;
    padding: 20px;
    min-width: 280px;
    margin: 10px;
    transition: ease background 0.3s;
    text-align: center;
  }
  span.title {
    width: 100%;
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 0.25rem;
  }
  a:hover {
    background: #dfdfdf;
  }
</style>
