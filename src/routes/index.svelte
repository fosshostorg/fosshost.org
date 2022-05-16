<svelte:head>
	<title>Fosshost - Free Cloud Computing Resources for the Open Source Community</title>
	<meta name="description" content="At Fosshost we provide free hosting and related services to hundreds of open source projects. Apply today!">
	<meta property="og:title" content="Fosshost" />
	<meta property="og:description" content="At Fosshost we provide free hosting and related services to hundreds of open source projects. Apply today!" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://fosshost.org" />
	<meta property="og:image" content="https://fosshost.org/img/fosshost-card.png" />
	<meta name="twitter:card" content="summary_large_image">
</svelte:head>

<script>
	import Card from "../components/index/Card.svelte";
	import Connector from "../components/index/Connector.svelte";
</script>

<main>
	<div>
		<Card img="/img/illustration1.png">
			Fosshost is here to support your open source project with practical, free hosting solutions.  The world runs on open source software, and we provide robust hosting solutions to make sure it stays that way. What's more, we do it all completely free of charge.
		</Card>
		<Connector />
		<Card reverse img="/img/illustration2.png">
			Our reliable, global hosting infrastructure is scalable to your needs, spanning multiple regions for unbeatable support in hosting, promoting and developing your project.
		</Card>
		<Connector reverse />
		<Card img="/img/illustration3.png">
			<b>How?</b> It’s all thanks to our hosting sponsors and dedicated volunteers, without whom none of this would be possible.  Read more about our work, including our educational projects, <a href="/about">here</a>.
		</Card>
	</div>
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
