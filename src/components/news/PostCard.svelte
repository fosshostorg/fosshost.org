<script lang="ts">
    import marked from 'marked';
    import { fade } from 'svelte/transition';

    export let post: Post;
    export let index: number;

    const dateFormatOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = new Date((post.details.date).replace(/-/g, '\/').replace(/T.+/, '')).toLocaleDateString("en-US", dateFormatOptions);
</script>

<a href={"/news/" + post.details.slug} class="card" in:fade={{delay: 50 * index, duration: 200}}>
    <div>
        <span class="date">{date}</span>
        <h2>{post.details.title}</h2>
        <p>{@html post.details.summary ? post.details.summary : marked(post.body.split(" ").splice(0, 15).join(" "))}</p>
        <span class="link">
            <a class="read-more" href={"/news/" + post.details.slug}>READ MORE</a>
        </span>
        
        <divider></divider>
    </div>
</a>

<style>
    a.card {
        display: inline-flex;
        flex-basis: 380px;
        flex-grow: 1;
        text-decoration: none;
        color: var(--fosshost-black);
        margin: 1rem;
        /* min-height: 300px; TODO: Decide whether or not cards should have a fixed height. */
    }

    a.read-more {
        text-decoration: none;
        color: var(--fosshost-orange);
        font-weight: bold;
        margin-bottom: 1.5rem;
        display: block;
        text-transform: uppercase;
        padding: 4px 0;
        transition: 0.5s;
        position: relative;
        width: 100%;
    }

    a.read-more::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: 0;
        left: 0;
        background: var(--fosshost-orange);
        transition: transform 0.5s;
        transform: scaleX(0);
        transform-origin: right;
    }

    span.link {
        position: relative;
        display: flex;
        flex-grow: 1;
        align-items: flex-end;
    }

    div {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        /* min-height: 300px; */
    }

    span.date {
        text-transform: uppercase;
        color: #b1b1b1;
        letter-spacing: .09rem;
        font-size: 14px;
        line-height: 17.5px;
    }

    h2 {
        font-size: 24px;
        line-height: 32px;
        margin: 1rem 0 1.25rem;
        display: inline-block;
        border-bottom: 3px solid white;
        transition: ease border-color 0.3s;
    }

    h2:hover {
        border-color: black;
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
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: #e5e5e5;
    }
</style>