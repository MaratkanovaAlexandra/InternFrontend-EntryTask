<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let currencies: string[];
  export let title: string;

  const dispatch = createEventDispatcher();
  let value = "";

  function select(currency: string) {
    dispatch("selectCurrency", {
      id: currency,
    });
  }
</script>

<div>
  <span class="form-label">{title}</span>
  <!-- <div>
    {#each currencies as currency}
      <button class="btn" on:click={() => select(currency)}>{currency}</button>
    {/each}
  </div> -->

  <select
    class="form-select form-select-lg mb-3"
    aria-label="Large select example"
    bind:value
    on:change={() => select(value)}
  >
    {#each currencies as currency}
      <!-- <button class="btn" on:click={() => select(currency)}>{currency}</button> -->
      <option value={currency}>{currency}</option>
    {/each}
  </select>
</div>
