<svelte:head>
	<title>Fosshost - Free Cloud Computing Resources for the Open Source Community</title>
	<meta name="description" content="At Fosshost we provide free hosting and related services to hundreds of open source projects. Apply today!">
	<meta property="og:title" content="Fosshost" />
	<meta property="og:description" content="At Fosshost we provide free hosting and related services to hundreds of open source projects. Apply today!" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://fosshost.org" />
	<meta property="og:image" content="https://fosshost.org/img/HERO_IMAGE.png" />
	<meta name="twitter:card" content="summary_large_image">
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
			You can read more about our work <a class="fosshost-link" href="/about">here</a>.
		</Card>
	</div>
	<Quote author="Morgan Lemmer-Webber" authorDetails="Founder, ActivityPub Conference">
		Fosshost provided us with a dedicated Big Blue Button server 
		for ActivityPub Conference 2020. Thanks to their support we 
		were able to host a zero-budget international free software 
		conference with reliable video conferencing.
	</Quote>
	<Quote author="Ayane Satomi" authorDetails="Project lead, Vignette">
		When we started out Vignette, we weren't sure if we would be able to launch successfully 
                because of our lack of budget, until Fosshost agreed to host our open-source project's web resources.
                It's because of their unwavering support that Vignette became successful as an open-source project.
        </Quote>
</main>


<style>
	main {
		width: 100%;
		height: 100%;
		font-family: 'Source Sans Pro', sans-serif;
		background-color: white;
	}

	div {
		max-width: var(--content-max-width);
		margin: 0 auto;
	}

</style>
