<script lang="ts">
    export let href: string;
    export let inverted = false;
    export let fontSize = "32px";
</script>


<a {href} style="--bg:{inverted ? "var(--fosshost-text-black)" : "white"};--tc:{inverted ? "white" : "var(--fosshost-text-black)"};--fontSize:{fontSize};">
    <h3>
        <slot></slot>
    </h3>   
    <svg
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_23_158)">
          <path
            d="M16.0447 24.6323H31.7163"
            stroke-width="4.8"
            stroke-linecap="square"
          />
          <path
            d="M24.6268 16.1765L33.582 25L24.6268 33.8235"
            stroke-width="4.8"
            stroke-linecap="square"
          />
          <path
            d="M1.90419 25C1.90419 37.5888 12.2618 47.7941 25.0385 47.7941C37.8153 47.7941 48.1729 37.5888 48.1729 25C48.1729 12.4111 37.8153 2.20587 25.0385 2.20587C12.2618 2.20587 1.90419 12.4111 1.90419 25Z"
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

<style>
    a {
        display: flex;
        max-width: var(--content-max-width);
        box-sizing: border-box;
        margin: 0 auto;
        background-color: var(--bg);
        border: 2px solid var(--fosshost-text-black);
        align-items: center;
        padding: 1rem 2rem;
        justify-content: space-between;
        cursor: pointer;
        text-decoration: none;
        width: 90%;
        transition: ease border-left-width 0.5s;
    }

    a:hover {
        border-left-width: 4rem;
    }

    h3 {
        font-size: var(--fontSize);
        color: var(--tc);
        margin: 0;
    }

    svg {
        height: 44px;
        max-height: 100%;
        stroke: var(--tc);
    }
</style>
