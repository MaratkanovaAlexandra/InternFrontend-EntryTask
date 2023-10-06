<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let currencies: string[];
  export let title: string;

  const dispatch = createEventDispatcher();

  function select(currency: string) {
    dispatch("selectCurrency", {
      id: currency,
    });
  }
</script>

<div>
  <div>
    <span>{title}</span>
    {#each currencies as currency}
      <button class="btn" on:click={() => select(currency)}>{currency}</button>
    {/each}
  </div>
</div>
