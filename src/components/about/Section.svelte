<script>
    export let title;
    export let id = null;
</script>

<div {id}>
    <h2>{title}</h2>
    <slot></slot>
</div>


<style>
    div {
		max-width: var(--content-max-width);
		margin: 0 auto 150px;
	}

    h2 {
        font-family: 'Source Sans Pro', sans-serif;
        font-size: 72px;
        font-weight: 600;
        margin: 16px 0px;
    }

    @media (max-width: 750px) {
        h2 {
            font-size: 60px;
        }
    }
</style>