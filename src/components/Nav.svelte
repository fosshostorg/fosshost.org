<script lang="ts">
	export let segment: string;

</script>

<nav>
	<a href="/"><img src="/img/FosshostLogo.png" alt="Fosshost Logo" /></a>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">Home</a></li>
		<li><a aria-current="{segment === 'projects' ? 'page' : undefined}" href="projects">Projects</a></li>
		<li><a aria-current="{segment === 'news' ? 'page' : undefined}" href="news">News</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">About</a></li>
		<li><a aria-current="{segment === 'donate' ? 'page' : undefined}" href="donate">Donate</a></li>
		<li><a class="apply" href="apply">Apply</a></li>
	</ul>
	<span class="material-icons">menu</span>
</nav>

<style>
	nav {
		height: 80px;
		width: auto;
		padding: 0px 30px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-family: 'Cabin', sans-serif;
		font-size: 16px;
		background-color: white;
	}

	ul {
		list-style: none;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		margin: 0px;
		height: 100%;
	}

	@media (max-width: 825px) {
		ul {
			display: none;
		}
		span {
			display: block !important;
		}
	}

	span {
		display: none;
		cursor: pointer;
	}

	li:last-child {
		width: 120px;
	}

	li {
		width: 80px;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	a {
		text-decoration: none;
		color: black;
		height: 100%;
		display: flex;
		align-items: center;
	}

	a.apply {
		color: white;
		padding: 8px 15px;
		background-color: var(--fosshost-orange);
		border-radius: 6px;
		transition: ease all 0.3s;
		height: auto;
	}

	a.apply:hover {
		color: var(--fosshost-orange);
		background-color: white;
		border: 1px solid var(--fosshost-orange);
	}

	[aria-current] {
		color: var(--fosshost-orange);
		border-bottom: 2px solid var(--fosshost-orange);
		height: calc(100% - 4px);
		margin-top: 2px;
	}

	img {
		height: 50px;
	}
</style>
