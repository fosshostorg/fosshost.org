<script lang="ts">
	export let segment: string;
	let open = true;
	let width;

	$: if (segment !== "") {
		open = false;
	}
	
	$: if (width > 825) {

		open = false;
	}

</script>

<svelte:window bind:innerWidth={width}></svelte:window>

<nav>
	<a href="/"><img src="/img/fosshost-logo.png" alt="Fosshost Logo" /></a>
	<ul class:open>
		<li><a on:click={() => open = false} aria-current="{segment === undefined ? 'page' : undefined}" href=".">Home</a></li>
		<li><a on:click={() => open = false} aria-current="{segment === 'projects' ? 'page' : undefined}" href="projects">Projects</a></li>
		<li><a rel="prefetch" on:click={() => open = false} aria-current="{segment === 'news' ? 'page' : undefined}" href="news">News</a></li>
		<li><a on:click={() => open = false} aria-current="{segment === 'about' ? 'page' : undefined}" href="about">About</a></li>
		<li><a on:click={() => open = false} aria-current="{segment === 'donate' ? 'page' : undefined}" href="donate">Donate</a></li>
		<li><a on:click={() => open = false} class="apply" href="apply">Apply</a></li>
	</ul>
	<span class="nav-expand" class:open></span>
	<span class="material-icons" on:click={() => open = !open} class:open>
		{open ? 'close' : 'menu'}
	</span>
</nav>

<style>
	nav {
		height: 80px;
		width: calc(100% - 60px);
		padding: 0px 30px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-family: 'Cabin', sans-serif;
		font-size: 16px;
		background-color: white;
		position: sticky;
		top: 0;
		left: 0;
		z-index: 1000;
	}

	ul {
		list-style: none;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		margin: 0px;
		height: 100%;
	}

	span.nav-expand {
		width: 0px;
		height: 0px;
		background-color: var(--fosshost-orange);
		position: fixed;
		top: 0px;
		right: 0px;
		z-index: 500;
		border-radius: 0 0 0 100%;
		transition: cubic-bezier(.77,0,.18,1) width 0.5s, cubic-bezier(.77,0,.18,1) height 0.5s;
	}

	span.nav-expand.open {
		width: 150vh;
		height: 150vh;
	}


	@media (max-width: 825px) {
		ul {
			/* display: none;
			visibility: hidden; */
			position: fixed;
			top: -80px;
			left: 100%;
			display: flex;
			z-index: 501;
			height: 100vh;
			width: 100vw;
			padding: 0px;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			transition: ease left 0.5s;
		}
		span {
			display: block !important;
		}
		ul li {
			width: 95% !important;
			max-width: 300px;
			height: auto;
			border-bottom: 2px solid white;
		}
		ul li a {
			width: 100%;
			color: white;
			padding: 1rem !important;
		}
		ul li [aria-current] {
			color: var(--fosshost-black);
			border-bottom: none;
			height: initial;
			margin-top: 0px;
		}
		a.apply {
			width: 100% !important;
			border: none;
			border-radius: 0px !important;
			display: flex;
			align-items: center;
			justify-content: center;
			color: var(--fosshost-orange) !important;
			background: white !important;
			border-left: 2px solid white;
			border-right: 2px solid white;
		}
		a.apply:hover {
			color: white !important;
			background: var(--fosshost-orange) !important;
			border-top: none !important;
			border-bottom: none !important;
			border-left: 2px solid white !important;
			border-right: 2px solid white !important;
		}
	}

	ul.open {
		left: 0;
		transition: ease left 0.6s;
	}

	span.material-icons {
		display: none;
		cursor: pointer;
		z-index: 502;
	}

	span.material-icons.open {
		color: white;
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
		font-family: 'Cabin', sans-serif;
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
