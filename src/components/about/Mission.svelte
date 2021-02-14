<script>

</script>

<div>
    <h2>
        <slot name="title"></slot>
    </h2>
    <span>
        <slot></slot>
    </span>
</div>

<style>
    div {
        width: 100%;
        background-color: var(--fosshost-orange);
        color: white;
        display: flex;
        flex-direction: column;
        padding: 150px 0px;
    }

    h2, span {
        width: 90%;
        max-width: calc(var(--content-max-width) - 500px);
        margin: 0 auto;
        margin-bottom: 2rem;
    }

    h2 {
        font-size: 36px;
    }

    span {
        font-size: 24px;
    }
</style>