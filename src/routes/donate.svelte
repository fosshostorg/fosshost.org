<script>
    import DonateCard from '../components/donate/DonateCard.svelte';
    import OtherSupport from '../components/donate/OtherSupport.svelte';
    import Header from '../components/Header.svelte';
</script>

<svelte:head>
	<title>Fosshost - Donate</title>
	<meta name="description" content="Donate to Fosshost! Help us keep the lights on by providing a donation today.">
	<meta property="og:title" content="Fosshost - Donate" />
	<meta property="og:description" content="Donate to Fosshost! Help us keep the lights on by providing a donation today." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://fosshost.org/donate" />
	<meta property="og:image" content="https://fosshost.org/img/HERO_IMAGE.png" />
</svelte:head>

<main>
    <Header
        title="A little goes a long way"
        subtitle="Many projects save significant costs and expenses by using our service, but occasionally we incur emergency or unexpected costs. By making a donation you help to keep the lights on."
        src="/img/illustration0.png"
    />
    <DonateCard />
    <OtherSupport src="/img/donation_illustration.png" title="Other ways to help and support us">
        You could buy us a <a href="https://ko-fi.com/fosshost" target="_blank" class="fosshost-link">coffee!</a>
            <br><br>
            We are also always looking for volunteers and we accept hardware or services, please email admin (at) fosshost.org
    </OtherSupport>
</main>