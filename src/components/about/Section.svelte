<script>
    export let title;
</script>

<div>
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
</style>