<script>

</script>

<main>
    <div>
		<h1>Looking for a place to host your first project?</h1>
		<p>We'll help you every step of the way.</p>
		<a class="apply" href="/apply">Apply Now</a>
    </div>
    <span class="footer">
        <ul>
            <li><a href="/docs">Docs</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/donate">Donate</a></li>
            <li><a href="/sponsors">Sponsors</a></li>
            <li><a href="/media">Media</a></li>
            <li><a href="/status">Network Status</a></li>
            <li><a href="/legal">Legal</a></li>
        </ul>
        <span>
            <ul class="copy-info">
                <li>Fosshost C.I.C. All rights reserved &copy; 2021</li>
            </ul>
        </span>
    </span>
</main>

<style>
    main {
        display: flex;
        width: 100%;
        flex-direction: column;
    }

    span.footer {
        width: 100%;
        background-color: #4D4D4D;
        min-height: 140px;
        display: flex;
        flex-direction: column;
    }

    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        background-color: #4D4D4D;
        margin: 0px;
        font-weight: 500;
        font-size: 14px;
        margin-top: 40px;
    }

    ul.copy-info {
        font-weight: 300;
        color: white;
        opacity: 0.6;
        margin: 0px;
        margin-bottom: 20px;
    }

    ul.copy-info a {
        text-decoration: underline;
    }

    li {
        margin: 10px;
    }

    li a {
        color: white;
        text-decoration: none;
    }

    div {
		display: flex;
		width: 100%;
		height: 480px;
		background-color: var(--fosshost-orange);
		color: white;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	h1 {
		font-size: 42px;
		line-height: 63px;
		margin: 0px 30px;
        text-align: center;
	}

	p {
		font-size: 24px;
		line-height: 36px;
		font-weight: 400;
		margin: 5px 0px;
        text-align: center;
	}

    @media (max-width: 640px) {
        h1 {
            font-size: 32px;
            line-height: normal;
        }
        p {
            font-size: 14px;
        }
        a.apply {
            font-size: 16px !important;
            margin-top: 20px !important;
        }
        div {
            height: 400px;
        }
    }

	a.apply {
		margin-top: 80px;
		font-weight: 600;
		font-size: 24px;
		line-height: 36px;
		padding: 8px 40px;
		color: var(--fosshost-orange);
		background-color: white;
		text-decoration: none;
		border-radius: 6px;
		border: 1px solid white;
		transition: ease color 0.3s, ease background-color 0.3s;
	}

	a.apply:hover {
        color: white;
		background-color: transparent;
        border: 1px solid white;
	}
</style>