<script>
    import HideDetails from "./HideDetails.svelte";
</script>

<main>
    <h2>Donate to Fosshost</h2>

    <span>
        We don't expect financial reimbursement from those whom we support, but if you can do so, please carefully consider how much you can donate, either on a one-off or recurring basis; it is very much appreciated and helps to keep the lights on, as we
        grow and ensure we remain self-sustainable.

        <HideDetails>
            <p slot="title">Want to make a donation in EURO?</p>
            <span slot="body">
                <p>This account accepts payments from within the EU and SEPA.</p>
                <p>Please deposit into the following account:<br /><br /></p>
                <p>Account Name: Fosshost C.I.C</p>
                <p>SWIFT/BIC: TRWIBEB1XXX</p>
                <p>IBAN: BE54 9672 0293 7197</p>
                <p>Address: Avenue Louise 54, Room S52, Brussels, 1050, Belgium</p>
            </span>
        </HideDetails>
        <HideDetails>
            <p slot="title">Want to make a donation in GBP?</p>
            <span slot="body">
                <p>Please deposit into the following account:<br /><br /></p>
                <p>Account Name: Fosshost C.I.C</p>
                <p>Sortcode: 23-14-70</p>
                <p>Account Number: 37343617</p>
                <p>SWIFT/BIC: TRWIGB2L</p>
                <p>IBAN: GB88 TRWI 2314 7037 3436 17</p>
                <p>Address: TransferWise, 56 Shoreditch High Street, London, E1 6JJ, United Kingdom</p>
            </span>
        </HideDetails>
        <HideDetails>
            <p slot="title">Want to make a donation in USD?</p>
            <span slot="body">
                <p>
                    If you are making a donation in USD from <em>within</em> the USA please deposit into the following account:<br /><br />
                </p>
                <p>Account Name: Fosshost C.I.C</p>
                <p>Routing Number: 084009519</p>
                <p>Account Number: 9600 0001 9973 3949</p>
                <p>Account Type: Checking</p>
                <p>
                    Address: TransferWise, 19 W 24th Street, New York NY 10010, United States<br /><br />
                </p>

                <p>
                    If you are making a donation in USD from <em>outside</em> the USA please deposit into the following account:<br /><br />
                </p>
                <p>Account Name: Fosshost C.I.C</p>
                <p>SWIFT/BIC: CMFGUS33</p>
                <p>Account Number: 8311067189</p>
                <p>
                    Address: TransferWise, 19 W 24th Street, New York NY 10010, United States<br /><br />
                </p>

                <p>When you make a transfer to the above account(s), you may see Community Federal Savings Bank (CFSB), Evolve Bank and Trust (EVOLVE). This is because our USD accounts are with both CFSB and EVOLVE.</p>
            </span>
        </HideDetails>
        <HideDetails>
            <p slot="title">Want to donate using Bitcoin (BTC)?</p>
            <span slot="body">
                <p>Please deposit into the following wallet: 3KydyNubTMzvACRHN1rr5Q46tEkBAHwnY1<br /><br /></p>
                <p>Only send Bitcoin (BTC) to this address. Any other asset sent to this address, including Bitcoin Cash (BCH) and USDT, will be permanently lost.</p>
            </span>
        </HideDetails>
        <HideDetails>
            <p slot="title">Want to donate using Ether (ETH)?</p>
            <span slot="body">
                <p>Please deposit into the following wallet: 0x3a8ba2edb6f3fbc63f22409925238b15bee57640<br /><br /></p>
                <p>Only send Ether (ETH) or supported ERC20 tokens to this address. Any other asset sent to this address will be permanently lost.</p>
            </span>
        </HideDetails>
        <HideDetails>
            <p slot="title">Want to donate using Litecoin (LTC)?</p>
            <span slot="body">
                <p>Please deposit into the following wallet: MGEUJpe1CjHXZzG9QPaSqHbJP6gASUrkxo<br /><br /></p>
                <p>We use Litecoin's new P2SH address format.</p>
            </span>
        </HideDetails>
        Or to make a donation with PayPal, select the icon below.
    </span>
    <div>
        <a target="_blank" href="https://www.paypal.com/donate/?hosted_button_id=FQCXJ68P4K8PC">
            <img height="80" width="80" src="/img/icon_PayPal.svg" alt="Donate with PayPal." />
        </a>
    </div>
</main>

<style>
    main {
        width: 100%;
        display: flex;
        flex-direction: column;
        background: #f3f3f3;
        padding: 5rem 0;
    }

    h2,
    span {
        width: 90%;
        max-width: calc(var(--content-max-width) - 500px);
        margin: 0 auto;
        margin-bottom: 2rem;
    }

    h2 {
        color: var(--fosshost-black);
        font-size: 36px;
        line-height: 42px;
    }

    span {
        font-size: 24px;
        line-height: 40px;
        color: var(--fosshost-grey);
    }

    div {
        display: flex;
        flex-wrap: wrap;
        margin-top: 2rem;
        align-self: center;
        justify-content: center;
    }

    a {
        margin: 1rem 2rem;
    }
</style>
