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
		width: 50%;
		align-items: center;
		justify-content: flex-end;
	}

	li:last-child {
		width: 120px;
	}

	li {
		width: 80px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	a {
		text-decoration: none;
		color: black;
	}

	a.apply {
		color: white;
		padding: 8px 15px;
		background-color: var(--fosshost-color);
		border-radius: 6px;
		transition: ease all 0.3s;
	}

	a.apply:hover {
		color: var(--fosshost-color);
		background-color: white;
		border: 1px solid var(--fosshost-color);
	}

	[aria-current] {
		color: var(--fosshost-color);
	}

	img {
		height: 50px;
	}
</style>
