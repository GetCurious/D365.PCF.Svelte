<script lang="js">
  import { onMount } from "svelte";
  import Counter from "./components/Counter.svelte";
  import { createEventDispatcher } from "svelte";

  export let context;
  export let fieldValue = "";
  export let isDisabled = false;
  export let isVisible = true;

  const dispatch = createEventDispatcher();

  function onBlur() {
    dispatch("change", { fieldValue });
  }

  onMount(() => {
    fieldValue = context.parameters.sampleProperty.raw;
  });
</script>

<h1>Hello World <Counter /></h1>

{#if isVisible}
  <input
    type="text"
    disabled={isDisabled}
    bind:value={fieldValue}
    on:blur={onBlur}
    placeholder="---" />
{/if}
