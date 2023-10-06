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
  <div class="mb-3 d-flex">
    <input
      class="form-control"
      bind:value={inputValue}
      on:input={calcCurrency}
      placeholder="Input currency"
    />
    <span class="m-2 d-block"> → </span>
    <input
      class="form-control"
      bind:value={outputValue}
      placeholder="Output currency"
    />
  </div>
</form>
