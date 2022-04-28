<script lang="ts">
  import { fade } from "svelte/transition";
  import Input from "./Input.svelte";
  export let data: FormResponse;
  export let currentPage: number;
  import * as yup from "yup";

  const validator = yup.object().shape({
    criteriaQuestionResponse: yup.string().required(),
  });

  const handleSubmit = async () => {
    try {
      validator.validateSyncAt("criteriaQuestionResponse", data.security);

      fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (res.ok) {
            window.sessionStorage.removeItem("form_data");
            currentPage++;
          } else {
            if (res.status === 429) {
              res.json().then((time) => {
                const resetAt = new Date(time);
                let tryAgain = resetAt.getTime() - new Date().getTime();
                if (tryAgain < 0) {
                  tryAgain = 0;
                }
                tryAgain = Math.round(tryAgain / 60000);
                error = `Too many tries. Try again in ${tryAgain} minutes.`;
              });
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      // console.log(err);
      error = err.message;
    }
  };

  let error = null;
</script>

<main in:fade={{ delay: 0, duration: 400 }}>
  <h1>Security Question</h1>
  <p>
    To prevent fraudulent and spam appplications and to verify that
    applications/projects have taken the time to read the Eligibility Criteria,
    please confirm the piece of information we asked you to write down when you
    read our documentation. This is not a trick question and is used to
    established that you have read our documentation properly. <br /><br />
    <em
      >Please note that we will immediately reject any applications where this
      information is not provided to us.</em
    >
  </p>
  <Input
    {error}
    label="Eligibility Criteria Question"
    placeholder="Enter the necessary response"
    bind:value={data.security.criteriaQuestionResponse}
  />
  <div class="buttons">
    <button
      class="back"
      on:click={() => {
        currentPage -= 1;
      }}>Back</button
    >
    <button class="submit" on:click={handleSubmit}>Submit</button>
  </div>
</main>

<style>
  em {
    font-style: normal;
    text-decoration: underline;
  }

  p {
    padding-bottom: 1rem;
  }
</style>
