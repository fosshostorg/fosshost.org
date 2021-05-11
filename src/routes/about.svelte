<script>
	import Header from '../components/about/Header.svelte'
	import Mission from '../components/about/Mission.svelte';
	import Section from '../components/about/Section.svelte';
	import Sponsor from '../components/about/Sponsor.svelte';
	import {Sponsors} from '../data/sponsors';

</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<main>
    <Header />
	<Mission>
		<div slot="title">What we do</div>
		<div>
			We're on a mission to empower and support every free and open source software project. To go further, together. Our work never stops.
			<br><br>
			Today, we help provide world-class hosting services to hundreds of open source projects.
			<br><br>
			To make this a success, we operate several nodes which are usually donated by our hosting sponsors, and the Fosshost Volunteers manage the infrastructure donated to us, on behalf of the projects we help. You can read more about the projects we help here. Those open source projects eligible for our services, typically apply for a virtual private server (VPS). We support most operating systems including CentOS, Debian, Ubuntu, ArchLinux and FreeBSD and custom OS.
			<br><br>
			Other services we provide include web, email, hosted video and voice conferencing and domain / DNS hosting services. You can apply for all of our services via the application form, or read more about the services we offer here.
		</div>
	</Mission>
	<!-- <Section>
		<div slot="title">Our Network</div>
		<div slot="description" id="sponsors">The project operates a large and global infrastructure across multiple continents in world-class facilities. Projects can select which region they want their services deploying on during the application process. Below is a current list of the regions we operate from, and the specifications of the virtualisation platforms we run within them. Occasionally, we run multiple nodes from the same facility.</div>
	</Section> -->
	<div id="sponsors"></div>
	<Section>
		<div slot="title">Sponsors</div>
		<div slot="description">
			All of our infrastructure and networking is kindly donated and provided to the project for free. We could simply not operate without these contributions to the project and fosshost.org is extremely grateful for the kind generosity of all our supporters.	
			<br>
			We believe in providing maximum transparency with our services and we are very proud to list those who have helped Fosshost. In no particular order.
		</div>
		{#each Sponsors as sponsor}
			<Sponsor {sponsor} />
		{/each}
	</Section>
</main>


<style>
    main {
      width: 100%;
			margin-bottom: 100px;
    }
</style>