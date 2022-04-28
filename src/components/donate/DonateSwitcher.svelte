<script lang="ts">
    let currencies = ["euro", "gbp", "usd", "btc", "eth", "ltc"];
    let selectedCurrency = currencies[0];
</script>

<div class="wrapper">
    <h4>or select a currency to learn how to donate:</h4>
    <span>
        {#each currencies as currency}
            <button on:click={() => {selectedCurrency = currency}} class:active={currency === selectedCurrency}>
                {currency}
            </button>
        {/each}
    </span>
    <div class="currency" class:visible={selectedCurrency === "euro"}>
        <slot name="euro"></slot>
    </div>
    <div class="currency" class:visible={selectedCurrency === "gbp"}>
        <slot name="gbp"></slot>
    </div>
    <div class="currency" class:visible={selectedCurrency === "usd"}>
        <slot name="usd"></slot>
    </div>
    <div class="currency" class:visible={selectedCurrency === "btc"}>
        <slot name="btc"></slot>
    </div>
    <div class="currency" class:visible={selectedCurrency === "eth"}>
        <slot name="eth"></slot>
    </div>
    <div class="currency" class:visible={selectedCurrency === "ltc"}>
        <slot name="ltc"></slot>
    </div>
</div>

<style>
    div.wrapper {
        display: flex;
        width: 100%;
        flex-direction: column;
        margin-top: 5rem;
    }

    span {
        display: flex;
        height: 40px;
        border: 1px solid var(--fosshost-border-black);
    }

    button {
        border: 1px solid var(--fosshost-border-black);
        color: var(--fosshost-text-black);
        background-color: white;
        font-size: 22px;
        font-weight: 600;
        line-height: 27px;
        font-family: inherit;
        margin: 0px;
        text-decoration: none;
        display: flex;
        flex-grow: 1;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    button.active, button:hover {
        color: white;
        background-color: var(--fosshost-text-black);
    }

    div.currency {
        max-width: 100%;
        padding: 1rem;
        box-sizing: border-box;
        border: 2px solid var(--fosshost-border-black);
        background-color: #F1F2F3;
        margin-top: 1rem;
        display: none;
    }

    div.currency.visible {
        display: flex;
    }

    h4 {
        font-size: 24px;
        margin: 0px;
        margin-bottom: 1rem;
    }

    @media (max-width: 750px) {
        span {
            max-width: 100%;
            flex-wrap: wrap;
            height: fit-content;
        }

        button {
            width: 100%;
            padding: 0.15rem 0rem;
        }

        .currency :global(div), .currency :global(p) {
            max-width: 100%;
            font-size: 16px;
            word-wrap: break-word;
        }
    }
</style>