<script lang="ts">
  import Icon from "./Icon.svelte";
  import { addBonus, score } from "./score";
  import type { Bonus } from "./types";
  const cfmt = Intl.NumberFormat('en-us', {
    notation: 'compact',
    compactDisplay: 'short',
  });
  export let bonus: Bonus;
  $: disabled = $score < bonus.cost;
</script>

<li>
  <button {disabled} on:click={() => addBonus(bonus)} class="text-gray-700 dark:text-gray-300 disabled:text-gray-500 dark:disabled:text-gray-500 disabled:hover:bg-gray-200 dark:disabled:hover:bg-gray-800 disabled:cursor-not-allowed bg-gray-200 dark:bg-gray-800 hover:text-indigo-600 hover:bg-gray-100 dark:hover:bg-gray-950 group w-full flex gap-x-3 items-center rounded-md p-2 text-sm leading-6 font-semibold">
    <Icon icon={bonus.id} />
    {bonus.label}
    <span class="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-white dark:bg-gray-800 px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-gray-700 group-disabled:text-gray-500 dark:group-disabled:text-gray-500 dark:text-gray-200 ring-1 ring-inset ring-gray-200 dark:ring-black" aria-hidden="true">{cfmt.format(bonus.cost)}</span>
  </button>
</li>