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
    <OtherSupport src="/img/illustration3.svg" title="Other ways to help and support us">
        You could buy us a <a href="https://ko-fi.com/fosshost" target="_blank" class="fosshost-link">coffee!</a>
            <br><br>
            We are also always looking for volunteers and we accept hardware or services, please email admin (at) fosshost.org
    </OtherSupport>
</main>