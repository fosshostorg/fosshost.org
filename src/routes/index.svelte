<svelte:head>
	<title>Fosshost - Free and open source hosting.</title>
	<meta name="description" content="At Fosshost we provide free hosting and related services to hundreds of open source projects. Apply today!">
	<meta property="og:title" content="Fosshost" />
	<meta property="og:description" content="At Fosshost we provide free hosting and related services to hundreds of open source projects. Apply today!" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://fosshost.org" />
	<meta property="og:image" content="https://fosshost.org/img/HERO_IMAGE.png" />
</svelte:head>

<script>
	import Card from "../components/index/Card.svelte";
	import Hero from "../components/index/Hero.svelte";
	import Projects from "../components/index/Projects.svelte";
	import Quote from "../components/index/Quote.svelte";
</script>

<main>
	<Hero />
	<Projects />
	<div>
		<Card img="/img/illustration1.png">
			The project operates free hosting services 
			for the open source community. The infrastructure 
			is donated by our hosting sponsors and is managed 
			by a group of highly talented volunteers.
		</Card>
		<Card reverse img="/img/illustration2.png">
			Many open source projects benefit from our 
			hosting services which help to support, promote, 
			and advance the development and movement of free software.
		</Card>
		<Card img="/img/illustration3.png">
			We operate a large and global infrastructure in 
			multiple regions which delivers a resilient, scalable, 
			and world-class hosting experience.
			<br>
			<br> 
			You can read more about our work <a href="/about">here</a>.
		</Card>
	</div>
	<Quote author="Morgan Lemmer-Webber" authorDetails="Founder, ActivityPub Conference">
		Fosshost provided us with a dedicated Big Blue Button server 
		for ActivityPub Conference 2020. Thanks to their support we 
		were able to host a zero-budget international free software 
		conference with reliable video conferencing.
	</Quote>
</main>


<style>
	main {
		width: 100%;
		height: 100%;
		font-family: 'Source Sans Pro', sans-serif;
		background-color: white;
	}

	a {
		color: var(--fosshost-color);
	}

	div {
		max-width: var(--content-max-width);
		margin: 0 auto;
	}

</style>
