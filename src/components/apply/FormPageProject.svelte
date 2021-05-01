<script lang="ts">
    import { fade } from 'svelte/transition';
    import Input from './Input.svelte';
    export let data: FormResponse;
    export let validate: any;
    export let pageValidate: any;
    export let currentPage: number;
    import * as yup from 'yup';

    const validator = yup.object().shape({
        name: yup.string().required(),
        description: yup.string().required(),
        role: yup.string().required(),
        site: yup.string().url()
    })

    let errors = {
        name: null,
        description: null,
        role: null,
        site: null,
    }

</script>

<main in:fade={{delay: 0, duration: 400}}>
    <h1>Project Information</h1>
    <p>We’d like to know more about the project you are working on. Please specify the necessary details below.</p>
    <Input on:blur={() => {errors = validate(validator, 'name', data.project, errors)}} error={errors.name} label="Project name" type="text" placeholder="What's your project called" bind:value={data.project.name} />
    <Input on:blur={() => {errors = validate(validator, 'description', data.project, errors)}} error={errors.description} textarea label="Tell us about your project" type="text" placeholder="Describe your project here" bind:value={data.project.description} />
    <Input on:blur={() => {errors = validate(validator, 'role', data.project, errors)}} error={errors.role} label="What's your role in the project?" type="text" placeholder="Supervisor, developer, manager, etc." bind:value={data.project.role} />
    <Input on:blur={() => {errors = validate(validator, 'site', data.project, errors)}} error={errors.site} label="Your website or git address" type="text" placeholder="https://myfossproject.com" bind:value={data.project.site} />
    <div class="buttons">
        <button class="back" on:click={() => {currentPage -= 1}}>Back</button>
        <button class="submit" on:click={() => {errors = pageValidate(validator, data.project, errors)}}>Next</button>
    </div>
</main>


<style>

</style>