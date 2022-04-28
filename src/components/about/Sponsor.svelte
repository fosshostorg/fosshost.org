<script lang="ts">
  export let sponsor: Sponsor;
</script>

<a href={sponsor.link} target="_blank">
  <div class="line grow"></div>
  <span class="title">
    {sponsor.name}
  </span>
  <div class="line"></div>
</a>

<style>
  a {
    display: flex;
    width: 100%;
    color: var(--fosshost-text-black);
    text-decoration: none;
    align-items: center;
    padding-bottom: 14px;
  }

  div.line {
    display: flex;
    flex-grow: 1;
    height: 2px;
    background-color: var(--fosshost-text-black);
  }

  div.line.grow {
    flex-grow: 0;
    /* width: 0px; */
    transition: ease all 1.0s;
  }
  span.title {
    font-weight: 700;
    font-size: 44px;
    padding-right: 60px;
    padding-left: 0px;
    transition: ease padding-left 1.2s, ease padding-right 0.9s;
  }
  a:hover .grow {
    flex-grow: 2;
  }

  a:hover .title {
    padding-left: 30px;
    padding-right: 30px;
  }

  @media (max-width: 750px) {
    span.title {
      font-size: 30px;
    }
  }
</style>
