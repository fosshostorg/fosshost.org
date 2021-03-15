<script>
	import Header from '../components/about/Header.svelte'
	import Mission from '../components/about/Mission.svelte';
	import Network from '../components/about/Network.svelte';
	import Provider from '../components/about/Provider.svelte';

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
	<Network>
		<div slot="title">Our Network</div>
		<div slot="description">The project operates a large and global infrastructure across multiple continents in world-class facilities. Projects can select which region they want their services deploying on during the application process. Below is a current list of the regions we operate from, and the specifications of the virtualisation platforms we run within them. Occasionally, we run multiple nodes from the same facility.</div>
		<Provider>
			<div slot="title">iomart DC5 Maidenhead</div>
			<div slot="location">Maidenhead, United Kingdom</div>
			<div slot="details">
				Dual Xeon 2630<br>
				64GB RAM<br>
				8x2TB SATA (RAID 10)<br>
				IPv4
			</div>
			<div slot="network">1000Mbps</div>
		</Provider>
		<Provider>
			<div slot="title">Timico Newark</div>
			<div slot="location">Newark, United Kingdom</div>
			<div slot="details">
				Dual Xeon 2136<br>
				64GB RAM<br>
				2x1TB SATA (RAID 1)<br>
				IPv4
			</div>
			<div slot="network">100Mbps</div>
		</Provider>
		<Provider>
			<div slot="title">zColo Chicago</div>
			<div slot="location">Chicago, United States</div>
			<div slot="details">
				Dual Xeon 5520<br>
				72GB RAM<br>
				4x3TB SATA (RAID 10)<br>
				IPv4 & IPv6 
			</div>
			<div slot="network">1000Mbps</div>
		</Provider>
		<Provider>
			<div slot="title">zColo Los Angeles</div>
			<div slot="location">Los Angeles, United States</div>
			<div slot="details">
				Dual Xeon 2630<br>
				64GB RAM<br>
				8x2TB SATA (RAID 10)<br>
				IPv4 
			</div>
			<div slot="network">1000Mbps</div>
		</Provider>
	</Network>
</main>


<style>
    main {
        width: 100%;
    }
</style>