<script lang="ts">
    export let author: string;
    export let authorDetails: string;
</script>

<main>
    <img src="/img/quotes.svg" alt="quote symbol"/>
    <p>
        <slot></slot>
    </p>
    <span>{author}</span>  
    <span class="details">{authorDetails}</span>
</main>

<style>
    main {
        width: 980px;
        max-width: 95%;
        background-color: rgba(255, 194, 194, 0.2);
        border-radius: 18px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 100px auto;
        padding: 50px 0px;
        border: 1px solid var(--fosshost-color);
    }

    p {
        font-size: 24px;
        line-height: 36px;
        text-align: center;
        margin: 40px 70px;
    }

    span {
        color: var(--fosshost-color);
        font-size: 20px;
        line-height: 30px;
        font-weight: 700;
    }

    span.details {
        color: #787878;
        font-weight: 300;
        font-size: 15px;
        line-height: 22.5px;
    }

</style>