<script>
    import CTA from "./CTA.svelte";

    export let attachCTA;
</script>



<span class="footer">
    {#if attachCTA}
    <CTA inverted fontSize="48px" href="/apply">
        Apply now!
    </CTA>
    {/if}
    <ul>
        <li><a href="https://docs.fosshost.org/">Docs</a></li>
        <li><a rel="prefetch" href="/contact">Contact</a></li>
        <li><a rel="prefetch" href="/donate">Donate</a></li>
        <li><a rel="prefetch" href="https://fosshost.gumroad.com">Merch</a></li>
        <li><a rel="prefetch" href="/about#sponsors">Sponsors</a></li>
        <li><a rel="prefetch" href="/media">Media Assets</a></li>
        <li><a rel="prefetch" href="/status">Network Status</a></li>
        <li><a rel="prefetch" href="/web-stats">Web Stats</a></li>
        <li><a rel="prefetch" href="/legal">Legal</a></li>
        <li><a rel="prefetch" href="/news/feed.xml">RSS</a></li>
    </ul>
    <span>
        <ul class="copy-info">
            <li>Fosshost is a C.I.C. LGB registered in England and Wales. Our C.I.C registration number is 13356530.<br>All rights reserved &copy; 2022</li>
        </ul>
    </span>
</span>


<style>
    span.footer {
        max-width: var(--content-max-width);
        min-height: 140px;
        margin: 160px auto 0px;
        display: flex;
        flex-direction: column;
    }

    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        margin: 0px;
        font-weight: 500;
        font-size: 14px;
        margin-top: 100px; 
    }

    ul.copy-info {
        font-weight: 300;
        color: var(--fosshost-text-black);
        text-align: center;
        padding: 0px;
        max-width: var(--content-max-width);
        margin: 20px auto;
    }

    ul.copy-info li {
        margin: 0 auto;
    }

    li {
        padding: 0px 10px;
        border-right: 1px solid var(--fosshost-border-black);
    }

    li:last-child {
        border-right: none;
    }

    li a {
        color: var(--fosshost-text-black);
        text-decoration: none;
    }

    @media (max-width: 750px) {
        ul.copy-info {
            max-width: 90%;
        }

        ul {
            max-width: 90%;
            padding: 0rem;
            margin: 50px auto 0px;
            justify-content: center;
        }

        span.footer {
            margin-top: 50px;
        }
    }
</style>
