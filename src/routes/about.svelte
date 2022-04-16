<script>
	import Section from '../components/about/Section.svelte';
	import Sponsor from '../components/about/Sponsor.svelte';
	import Hero from '../components/Hero.svelte';
	import Card from '../components/about/Card.svelte';
	import {Sponsors} from '../data/sponsors';

</script>

<svelte:head>
	<title>Fosshost - About</title>
</svelte:head>

<main>
	<Section title="who we are">
		<Card>
			Fosshost C.I.C is a non-profit UK-registered Community Interest Company.  We are also a member of Software in Public Interest, Inc a US 501(c)(3) non-profit organisation.
		</Card>
		<Card flipped>
			Fosshost began as the passion project of CEO Thomas Markey in April of 2020. He saw that lack of accessible, affordable hosting infrastructure was behind the abandonment of so many open source projects. Concerned, he saw no option but to work towards building a no-cost, distributed cloud computing service for open source projects and initiatives. Through hard work, determination and no small amount of good fortune, he was able to build Fosshost into the reliable, free hosting provider it is today.
		</Card>
		<Card>
			Our mission? To keep the open source development scene healthy by providing free hosting services, empowering existing developers and nurturing young development talent.
		</Card>
		<Card flipped>
			Today, our team works on multiple fronts to keep the open source scene strong and vibrant. We work with hosting sponsors and donors to operate hosting nodes all over the world, usually in the form of virtual private servers (VPS). 
			<br>
			<br>
			We also offer an array of educational opportunities to students and young people. Through this program, we hope to nurture the next generation of software developers, keeping the scene vibrant and ensuring that tomorrow’s software is even better than today’s.
		</Card>
	</Section>
	<Section title="our core sponsors" id="sponsors">
		{#each Sponsors as sponsor}
			<Sponsor {sponsor} />
		{/each}
	</Section>
	<Section title="">
		<img width="750px" src="/img/HERO_IMAGE.png" alt="Fosshost Community Illustration" />
	</Section>
</main>


<style>
    main {
		width: 100%;
		height: 100%;
		font-family: 'Source Sans Pro', sans-serif;
		background-color: white;
		max-width: 90%;
		margin: 0 auto;
	}

	@media (max-width: 750px) {
		img {
			width: 90%;
			margin: 0 5%;
		}
	}
</style>
