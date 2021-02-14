<script>

</script>

<div>
    <img alt="Placeholder Provider Logo"/>
    <span class="title">
        <slot name="title"></slot>
    </span>
    <span class="location">
        <slot name="location"></slot>
    </span>
    <h2>Server Details</h2>
    <span class="details">
        <slot name="details"></slot>
    </span>
    <h2>Network Connectivity</h2>
    <span class="network">
        <slot name="network"></slot>
    </span>
</div>

<style>
    div {
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
    }
    span.title {
        width: 100%;
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 0.25rem;
    }
    span.location {
        text-transform: uppercase;
        color: var(--fosshost-grey);
        letter-spacing: 0.15rem;
        font-size: 13px;
        line-height: 17.5px;
    }
    h2 {
        text-transform: uppercase;
        font-size: 14px;
        margin: 1.5rem 0 .3rem;
    }
    img {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        object-fit: cover;
        background-color: #C4C4C4;
        text-align: center;
        display: flex;
        align-items: center;
        margin: 1rem 0 2rem;
    }

    span.network, span.details {
        color: var(--fosshost-grey);
        line-height: 25px;
    }
</style>