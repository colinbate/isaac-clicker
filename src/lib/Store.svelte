<script lang="ts">
  import Bonus from "./Bonus.svelte";
  import type { Store } from "./types";
  export let store: Store;
</script>

<div class="flex flex-col flex-1">
  <ul class="flex flex-col gap-4">
    {#each store as bonus (bonus.id)}
    <Bonus {bonus} />
    {/each}
  </ul>
</div>
