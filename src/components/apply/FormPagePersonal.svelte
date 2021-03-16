<script lang="ts">
    import Input from './Input.svelte';
    export let data: FormResponse;
</script>

<main>
    <h1>Personal Information</h1>
    <Input label="Full name" type="text" placeholder="What's your name" bind:value={data.personal.name} />
    <Input label="Email" type="email" placeholder="What's your name" bind:value={data.personal.email} />
</main>


<style>

</style>