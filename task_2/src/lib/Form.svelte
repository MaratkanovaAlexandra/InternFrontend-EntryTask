<script lang="ts">
  import Input from "./Input.svelte";

  export let currencies: string[];
  export let rates: Record<string, string>;
</script>

<form>
  <Input />
  <Input />
</form>
