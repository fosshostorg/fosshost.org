<script lang="ts">
  import Eligibility from "./Eligibility.svelte";
  import FormPagePersonal from "./FormPagePersonal.svelte";
  import FormPageProject from "./FormPageProject.svelte";
  import FormPageTechnical from "./FormPageTechnical.svelte";
  import Security from "./Security.svelte";
  import Complete from "./Complete.svelte";
  import Stepper from "./Stepper.svelte";
  import * as yup from "yup";
  import { onMount } from "svelte";

  let data: FormResponse = {
    security: {
      hasAcceptedCriteria: false,
      criteriaQuestionResponse: "",
    },
    personal: {
      name: "",
      email: "",
    },
    project: {
      name: "",
      description: "",
      role: "",
      site: "",
    },
    technical: {
      services: [],
    },
  };
  let currentPage: number = 0;

  let components: any[] = [
    Eligibility,
    FormPagePersonal,
    FormPageProject,
    FormPageTechnical,
    Security,
    Complete,
  ];
  let steps = [
    "Personal Information",
    "Project Information",
    "Technical Specifications",
    "Security Question",
  ];

  let pages: { title: string; completed: boolean }[] = [];
  components.forEach((c, i) => {
    if (i == 0 || i == components.length - 1) {
      return;
    }
    pages.push({ title: steps[i - 1], completed: false });
  });

  const validate = (
    validator: any,
    field: string,
    value: any,
    errors: any
  ): any => {
    try {
      validator.validateSyncAt(field, value);
      errors[field] = null;
      return errors;
    } catch (err) {
      errors[field] = err.message;
      return errors;
    }
  };

  const pageValidate = (
    validator: any,
    value: any,
    errors: any,
    shouldChangePage: boolean = true
  ): any => {
    try {
      validator.validateSync(value, { abortEarly: false });
      window.sessionStorage.setItem("form_data", JSON.stringify(data));

      if (shouldChangePage) {
        currentPage++;
      }

      for (const field of Object.keys(errors)) {
        errors[field] = "";
      }
      return errors;
    } catch (err) {
      for (const error of err.inner) {
        errors[error.path] = error.message;
      }

      let paths = err.inner.map((err) => err.path);
      for (const field of Object.keys(errors)) {
        if (!paths.includes(field)) {
          errors[field] = "";
        }
      }

      return errors;
    }
  };

  onMount(() => {
    if (window.sessionStorage.getItem("form_data")) {
      data = JSON.parse(window.sessionStorage.getItem("form_data"));
    }
  });
</script>

<main>
  <svelte:component
    this={components[currentPage]}
    bind:currentPage
    {data}
    {pageValidate}
    {validate}
  />
</main>

<style>
  main {
    max-width: var(--content-max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 3rem;
  }

  main :global(h1) {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }

  main :global(p) {
    margin: 0 0 1rem;
    font-size: 18px;
    line-height: 24px;
    color: var(--fosshost-text-black);
  }

  main :global(div.buttons) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  main :global(button.submit) {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: flex-end;
    color: white;
    background-color: var(--fosshost-orange);
    border: 2px solid var(--fosshost-border-black);
    font-size: 18px;
    line-height: 27px;
    font-weight: 600;
    padding: 6px 2rem;
    cursor: pointer;
    margin: 2rem 0 0;
    transition: ease border-right-width 0.5s;
  }

  main :global(button.submit:hover) {
    border-right-width: 2rem;
  }

  main :global(button.back) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: var(--fosshost-text-black);
    background-color: white;
    border: 2px solid var(--fosshost-border-black);
    font-size: 18px;
    line-height: 27px;
    font-weight: 600;
    padding: 6px 2rem;
    cursor: pointer;
    margin: 2rem 0 0;
  }

  main :global(button.back ~ button) {
    margin-left: 1rem;
  }

  @media (max-width: 750px) {
    main {
      max-width: 90%;
    }
  }
</style>
