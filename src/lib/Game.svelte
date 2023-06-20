<script lang="ts">
  import Board from "./Board.svelte";
  import Store from "./Store.svelte";
  import { score, doClick, resetScore } from "./score";
  import { store } from "./store";
  
  const fmt = Intl.NumberFormat('en-us', {
    notation: 'compact',
    compactDisplay: 'long',
    maximumFractionDigits: 1,
  });

  
</script>
<div class="overflow-hidden rounded-lg bg-white dark:bg-gray-900 shadow text-left">
  <div class="grid grid-cols-1 md:grid-cols-5 gap-4 px-4 py-5 sm:p-6 md:h-[36rem]">
    <div class="md:col-span-5 bg-gray-200 dark:bg-gray-800 rounded-md p-2 flex items-center justify-between">
      <div>Score: {fmt.format($score)}</div>
      <button type="button" class="px-4 py-1 rounded bg-svelte" on:click={resetScore}>Reset</button>
    </div>
    <div class="md:col-span-3 flex flex-col flex-1 md:overflow-y-auto">
      <Board on:click={doClick} />
    </div>
    <div class="md:col-span-2 flex flex-col flex-1 md:overflow-y-auto">
      <Store {store}/>
    </div>
  </div>
</div>