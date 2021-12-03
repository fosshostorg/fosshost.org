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
    <button class="material-icons" disabled={page === 0} class:disabled={page === 0} on:click={() => {
            if (page > 0) 
                page--;
        }}>
        chevron_left
    </button>
    <span>
        {page+1}
    </span>
    <button class="material-icons" disabled={page === totalPages} class:disabled={page === totalPages} on:click={() => {
            if (page < totalPages) 
                page++;
        }}>
        chevron_right
    </button>
</div>

<style>
    div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        color: #787878;
        padding: 5rem 0rem;
    }

    span {
        font-size: 1.8rem;
        padding: 0rem 2rem;
    }

    button {
        border: none;
        border-radius: 6px;
        font-size: 2.5rem;
        color: #8a8a8a;
        padding: 0rem 2rem;
        cursor: pointer;
        background-color: #e2e2e2;
        border: 1px solid white;
        transition: ease all 0.3s;
    }

    button:hover:not(.disabled) {
        background-color: white;
        border: 1px solid #e2e2e2;
    }

    button.disabled {
        background-color: #f6f6f6;
        cursor: default;
    }
</style>

