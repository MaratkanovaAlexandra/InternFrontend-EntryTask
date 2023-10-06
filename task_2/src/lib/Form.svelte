<script lang="ts">
  export let currency: string;
  export let rates: Record<string, string>;

  let inputValue = "";
  let outputValue = "";

  const calcCurrency = () => {
    if (!inputValue) return;
    outputValue = `${+inputValue * +rates[currency]}`;
  };
</script>

<form>
  <input bind:value={inputValue} on:input={calcCurrency} />
  <input bind:value={outputValue} />
</form>
