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
    const { data } = await getCurrencyById(event.detail.id);
    inputCurrency = data;
  };
</script>

<main class="container p-3">
  {#if loading}
    <div>Loading...</div>
  {:else}
    <header class="">
      <h1 class="text-center">Currency Converter</h1>
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
    <div class="mt-2 mb-2">
      {inputCurrency?.base_code ?? "Select input currency"} → {outputCurrency ??
        "Select output currency"}
    </div>
    {#if outputCurrency && inputCurrency}
      <Form currency={outputCurrency} rates={inputCurrency.rates} />
    {/if}
  {/if}
</main>

<style>
</style>
