<script lang="ts">
  import marked from "marked";
  import { fade } from "svelte/transition";

  export let post: Post;
  export let index: number;

  const dateFormatOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  const date = new Date(
    post.details.date.replace(/-/g, "/").replace(/T.+/, "")
  ).toLocaleDateString("en-US", dateFormatOptions).replace(/\//g, ".");
</script>

<a
  href={"/news/" + post.details.slug}
  class="card"
  in:fade={{ delay: 50 * index, duration: 200 }}
>
  <div class="left">
    <h2>{post.details.title}</h2>
    <div class="row">
      <span class="summary"
        >{@html post.details.summary
          ? post.details.summary
          : marked(post.body.split(" ").splice(0, 15).join(" "))}</span
      >
      <div><span class="date">{date}</span></div>
    </div>
  </div>
  <span class="right">
    <a class="read-more" href={"/news/" + post.details.slug}
      ><svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_23_158)">
          <path
            d="M16.0447 24.6323H31.7163"
            stroke="currentColor"
            stroke-width="4.8"
            stroke-linecap="square"
          />
          <path
            d="M24.6268 16.1765L33.582 25L24.6268 33.8235"
            stroke="currentColor"
            stroke-width="4.8"
            stroke-linecap="square"
          />
          <path
            d="M1.90419 25C1.90419 37.5888 12.2618 47.7941 25.0385 47.7941C37.8153 47.7941 48.1729 37.5888 48.1729 25C48.1729 12.4111 37.8153 2.20587 25.0385 2.20587C12.2618 2.20587 1.90419 12.4111 1.90419 25Z"
            stroke="currentColor"
            stroke-width="4.8"
          />
        </g>
        <defs>
          <clipPath id="clip0_23_158">
            <rect width="50" height="50" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </a>
  </span>
</a>

<style>
  a.card {
    display: inline-flex;
    flex-direction: row;
    text-decoration: none;
    color: var(--fosshost-black);
    margin: 1rem 0 1rem 0;
    width: 100%;
    border: 2px solid #000000;
    transition: 0.25s;
  }

  @media (max-width: 1280px) {
    a.card {
      max-width: 100%;
    }
  }
  a.card:hover > .right {
    background: #000000;
    width: 142px;
  }
  a.card:hover > .right > a {
    color: #fff;
  }

  a.read-more {
    color: var(--fosshost-text-black);
    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
    padding: 4px 0;
    transition: 0.25s;
  }

  span.right {
    width: 122px;
    border-left: 2px solid #000000;
    transition: 0.25s;
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
  }

  div.left {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 17px;
  }
  div.row {
    padding-top: 11px;
    border-top: 2px solid #000000;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  span.date {
    text-transform: uppercase;
    color: var(--fosshost-grey);
    letter-spacing: 0.09rem;
    font-size: 24px;
    line-height: 30px;
    padding-left: 10px;
    border-left: 2px solid #000000;
    display: flex;
    align-items: center;
    height: 100%;
  }
  
  span.summary {
    font-size: 18px;
    line-height: 23px;
    padding-right: 2px;
    width: 445px;
    
  }
  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    /*line-height: 30px;*/
    margin-block-start: 0;
    max-width: calc(100% - 20px);
  }

  h2:hover {
    border-color: var(--fosshost-text-black);
  }

  @media (max-width: 750px) {
    span.right {
      display: none;
    }

    div.row {
      flex-wrap: wrap;
      max-width: 100%;
    }

    div.left {
      max-width: 100%;
      box-sizing: border-box;
    }

    span.date {
      margin: 1rem 0rem;
      border-left: none;
      padding-left: 0rem;
      
    }
  }
</style>
