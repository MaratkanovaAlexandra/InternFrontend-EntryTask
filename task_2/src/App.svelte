<script lang="ts">
  import { onMount } from "svelte";
  import { getCurrencies, getCurrencyById } from "./api";
  import Select from "./lib/Select.svelte";
  import Form from "./lib/Form.svelte";

  type Currency = {
    base_code: string;
    rates: Record<string, string>;
  };

  let currencies: string[] = [];
  let inputCurrency: Currency | null = null;
  let outputCurrency: string | null = null;
  let loading = true;

  onMount(async () => {
    currencies = await getCurrencies();
    loading = false;
  });

  const changeSelected = async (event: { detail: { id: string } }) => {
    loading = true;
    const { data } = await getCurrencyById(event.detail.id);
    inputCurrency = data;
    loading = false;
  };
</script>

<main>
  {#if loading}
    <div>Loading...</div>
  {:else}
    <header>
      <h1>currency converter</h1>
    </header>
    <Select
      title={"Select input currency"}
      {currencies}
      on:selectCurrency={changeSelected}
    />
    <Select
      title={"Select output currency"}
      {currencies}
      on:selectCurrency={(event) => (outputCurrency = event.detail.id)}
    />
    {#if outputCurrency && inputCurrency}
      <div>
        {inputCurrency.base_code} X {outputCurrency}
      </div>
      <Form currency={outputCurrency} rates={inputCurrency.rates} />
    {/if}
  {/if}
</main>

<style>
</style>
