<script lang="ts">
    export let post: Post;
    import marked from 'marked';
</script>

<a href={"/news/" + post.details.slug} class="card">
    <div>
        <span class="date">{post.details.date}</span>
        <h2>{post.details.title}</h2>
        <p>{@html post.details.summary ? post.details.summary : marked(post.body.split(" ").splice(0, 15).join(" "))}</p>
        <a class="read-more" href={"/news/" + post.details.slug}>READ MORE</a>
        <divider></divider>
    </div>
</a>

<style>
    a.card {
        display: flex;
        flex: 1 1 380px;
        text-decoration: none;
        color: var(--fosshost-black);
        margin: 1rem;
    }

    a.read-more {
        text-decoration: none;
        color: var(--fosshost-orange);
        font-weight: bold;
        margin-bottom: 1.5rem;
        position: relative;
        display: block;
        text-transform: uppercase;
        padding: 4px 0;
        transition: 0.5s;
    }

    a.read-more::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 3px;
        top: 100%;
        left: 0;
        background: var(--fosshost-orange);
        transition: transform 0.5s;
        transform: scaleX(0);
        transform-origin: right;
    }

    div {
        display: flex;
        flex-direction: column;
    }

    span {
        text-transform: uppercase;
        color: #b1b1b1;
        letter-spacing: .09rem;
        font-size: 14px;
        line-height: 17.5px;
    }

    h2 {
        font-size: 24px;
        line-height: 32px;
        margin: 1rem 0 1.5rem;
        display: inline-block;
    }

    h2:hover {
        /* transition: ease border-bottom 0.2s, ease margin-bottom 0.2s; */
        border-bottom: 3px solid black;
        margin-bottom: calc(1.5rem - 3px);
    }

    a.read-more:hover::after {
        transform: scaleX(1);
        transform-origin: left;
    }

    p {
        display: inline-block;
        font-size: 18px;
        line-height: 24px;
        color: #787878;
        margin: 0 0 1.5rem;
    }

    divider {
        width: auto;
        height: 1px;
        background-color: #e5e5e5;
    }
</style>