<script>
    import Section from '../components/about/Section.svelte';
    import CTA from '../components/CTA.svelte';

    import DonateCard from '../components/donate/DonateCard.svelte';
    import DonateSwitcher from '../components/donate/DonateSwitcher.svelte';
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
	<meta property="og:image" content="https://fosshost.org/img/fosshost-card.png" />
</svelte:head>

<main>
    <Section title="support us">
        <CTA href="https://www.paypal.com/donate/?hosted_button_id=FQCXJ68P4K8PC">
            Donate with Paypal
        </CTA>
        <DonateSwitcher>
            <div slot="euro">
                <p>Want to make a donation in EURO?</p>
                <span>
                    <p>This account accepts payments from within the EU and SEPA.</p>
                    <p>Please deposit into the following account:<br /><br /></p>
                    <p><b>Account Name:</b> Fosshost C.I.C</p>
                    <p><b>SWIFT/BIC:</b> TRWIBEB1XXX</p>
                    <p><b>IBAN:</b> BE54 9672 0293 7197</p>
                    <p><b>Address:</b> Avenue Louise 54, Room S52, Brussels, 1050, Belgium</p>
                </span>
            </div>
            <div slot="gbp">
                <p>Want to make a donation in GBP?</p>
                <span>
                    <p>Please deposit into the following account:<br /><br /></p>
                    <p><b>Account Name:</b> Fosshost C.I.C</p>
                    <p><b>Sortcode:</b> 23-14-70</p>
                    <p><b>Account Number:</b> 37343617</p>
                    <p><b>SWIFT/BIC:</b> TRWIGB2L</p>
                    <p><b>IBAN:</b> GB88 TRWI 2314 7037 3436 17</p>
                    <p><b>Address:</b> TransferWise, 56 Shoreditch High Street, London, E1 6JJ, United Kingdom</p>
                </span>
            </div>
            <div slot="usd">
                <p>Want to make a donation in USD?</p>
                <span>
                    <p>
                        If you are making a donation in USD from <em>within</em> the USA please deposit into the following account:<br /><br />
                    </p>
                    <p><b>Account Name:</b> Fosshost C.I.C</p>
                    <p><b>Routing Number:</b> 084009519</p>
                    <p><b>Account Number:</b> 9600 0001 9973 3949</p>
                    <p><b>Account Type:</b> Checking</p>
                    <p>
                        <b>Address:</b> TransferWise, 19 W 24th Street, New York NY 10010, United States<br /><br />
                    </p>
    
                    <p>
                        If you are making a donation in USD from <em>outside</em> the USA please deposit into the following account:<br /><br />
                    </p>
                    <p><b>Account Name:</b> Fosshost C.I.C</p>
                    <p><b>SWIFT/BIC:</b> CMFGUS33</p>
                    <p><b>Account Number:</b> 8311067189</p>
                    <p>
                        <b>Address:</b> TransferWise, 19 W 24th Street, New York NY 10010, United States<br /><br />
                    </p>
    
                    <p>When you make a transfer to the above account(s), you may see Community Federal Savings Bank (CFSB), Evolve Bank and Trust (EVOLVE). This is because our USD accounts are with both CFSB and EVOLVE.</p>
                </span>
            </div>
            <div slot="btc">
                <p>Want to donate using Bitcoin (BTC)?</p>
                <span>
                    <p>Please deposit into the following wallet: 3KydyNubTMzvACRHN1rr5Q46tEkBAHwnY1<br /><br /></p>
                    <p>Only send Bitcoin (BTC) to this address. Any other asset sent to this address, including Bitcoin Cash (BCH) and USDT, will be permanently lost.</p>
                </span>
            </div>
            <div slot="eth">
                <p>Want to donate using Ether (ETH)?</p>
                <span>
                    <p>Please deposit into the following wallet: 0x3a8ba2edb6f3fbc63f22409925238b15bee57640<br /><br /></p>
                    <p>Only send Ether (ETH) or supported ERC20 tokens to this address. Any other asset sent to this address will be permanently lost.</p>
                </span>
            </div>
            <div slot="ltc">
                <p>Want to donate using Litecoin (LTC)?</p>
                <span>
                    <p>Please deposit into the following wallet: MGEUJpe1CjHXZzG9QPaSqHbJP6gASUrkxo<br /><br /></p>
                    <p>We use Litecoin's new P2SH address format.</p>
                </span>
            </div>
        </DonateSwitcher>
        <div class="extra">
            Fosshost has hard costs and commitments to suppliers to run our service. We require donations to continue the work we do. We cannot survive without your support and donations.<br> <b>Please donate today.</b>
        </div>
        <div class="extra small">
            We are always looking for volunteers or donations of hardware and services. If you are interested in helping, please email admin (at) fosshost.org
        </div>
    </Section>
</main>

<style>
    main {
        max-width: 90%;
        margin: 0 auto;
    }
    
    p {
        font-size: 20px;
        font-weight: 600;
        margin: 0px;
    }

    div.extra {
        display: flex;
        flex-direction: column;
        font-size: 24px;
        font-weight: 500;
        padding: 1rem;
        margin: 2rem 0;
        text-align: center;
        color: white;
        background-color: var(--fosshost-text-black);
        opacity: 0.9;
    }

    div.small {
        font-size: 20px;
    }
</style>