<script>
    export let flipped;
</script>

<div class:flipped>
    <p>
        <slot></slot>
    </p>
</div>

<style>
    div {
        display: flex;
        width: 100%;
        justify-content: flex-start;

    }

    div.flipped {
        justify-content: flex-end;
    }

    div.flipped p {
        background-color: transparent;
    }

    p {
        background-color: #f1f2f3;
        font-size: 18px;
        padding: 20px 25px;
        border: 2px solid var(--fosshost-border-black);
        max-width: 70%;
        margin: 0px;
    }

    div:not(:first-child) {
        margin-top: -2px;
    }
</style>