<script lang="ts">
  import Board from "./Board.svelte";
  import Store from "./Store.svelte";
  import { score, doClick } from "./score";
  import type { Bonus } from "./types";
  
  const fmt = Intl.NumberFormat('en-us', {
    notation: 'compact',
    compactDisplay: 'long',
    maximumFractionDigits: 1,
  });

  let store: Bonus[] = [
    { label: 'Carrots', cost: 25, amount: 10, unit: 'click', id: 'carrot' },
    { label: 'Lamb', cost: 100, amount: 40, unit: 'click', id: 'lamb' },
    { label: 'Soup', cost: 150, amount: 60, unit: 'click', id: 'soup' },
    { label: 'Broccoli', cost: 200, amount: 100, unit: 'click', id: 'broccoli' },
    { label: 'Cookies', cost: 1000000, amount: 20000, unit: 'click', id: 'cookie' },
  ];
</script>
<div class="overflow-hidden rounded-lg bg-white dark:bg-gray-900 shadow text-left">
  <div class="grid grid-cols-1 md:grid-cols-4 gap-4 px-4 py-5 sm:p-6">
    <div class="md:col-span-4 bg-gray-200 dark:bg-gray-800 rounded-md p-2">Score: {fmt.format($score)}</div>
    <div class="md:col-span-3">
      <Board on:click={doClick} />
    </div>
    <div class="">
      <Store {store}/>
    </div>
  </div>
</div>