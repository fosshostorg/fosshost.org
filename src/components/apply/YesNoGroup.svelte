<script lang="ts">
    import { onMount } from 'svelte';
    import CheckboxGroup from './CheckboxGroup.svelte';

    export let answer: boolean = null;
    export let label: string;
    export let error: string;

    let options: string[] = ["Yes", "No"];
    let selected: any[] = [];

    const handleAnswer = () => {
        if (selected[0] == options[0]) {
            answer = true;
        } else {
            answer = false;
        }
    }

    onMount(() => {
        if (answer != null) {
            selected = answer ? [options[0]] : [options[1]];
        }
    })
    


</script>

<CheckboxGroup on:change on:change={handleAnswer} {options} bind:selected={selected} {label} {error} limit/>

