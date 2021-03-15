<script>
    import DonateCard from '../components/donate/DonateCard.svelte';
    import OtherSupport from '../components/donate/OtherSupport.svelte';
    import Header from '../components/Header.svelte';
</script>

<svelte:head>
    <title>Donate</title>
</svelte:head>

<main>
    <Header
        title="A little goes a long way"
        subtitle="Many projects save significant costs and expenses by using our service, but occasionally we incur emergency or unexpected costs. By making a donation you help to keep the lights on."
        src="/img/illustration0.png"
    />
    <DonateCard />
    <OtherSupport />
</main>