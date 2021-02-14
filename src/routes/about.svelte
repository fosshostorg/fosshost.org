<svelte:head>
	<title>About</title>
</svelte:head>

<script>
	import Header from '../components/about/Header.svelte'
	import Mission from '../components/about/Mission.svelte';
</script>

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
</main>


<style>
    main {
        width: 100%;
    }
</style>