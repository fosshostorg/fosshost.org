<script>
</script>

<div>
    <h2><slot name="title"/></h2>
    <p><slot name="description"/></p>
    <span>
        <slot></slot>
    </span>
</div>


<style>
    div {
        width: calc(100% - 100px);
        margin: 100px auto;
    }
    h2, p {
        text-align: center;
        max-width: var(--content-max-width);
        margin: 0 auto;
    }
    h2 {
        font-size: 36px;
        margin-bottom: 2rem;
    }
    p {
        font-size: 24px;
        line-height: 40px;
        margin-bottom: 40px;
    }
    span {
        display: flex;
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>