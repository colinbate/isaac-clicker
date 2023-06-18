<script lang="ts">
  import isaac from '../../public/isaac.webp';
  import pc from '../../public/purple-cake.webp';
  import { addBonus } from './score';
  const sides = [
    'bottom-0 translate-y-2/3',
    'top-0 -translate-y-2/3 rotate-180',
    'left-0 -translate-x-2/3 rotate-90',
    'right-0 translate-x-2/3 -rotate-90'
  ]
  let showBoost = false;
  const boost = { label: 'Boost', id: 'boost', cost: 0, amount: 0, unit: 'boost' } as const;
</script>
<div class="flex flex-col items-center justify-center h-full p-8 overflow-hidden relative">
  <button class="animate-wiggle" on:click><img src={isaac} alt="Isaac's Face"></button>
  {#if showBoost}<button type="button" class="absolute " on:click={() => addBonus(boost)}><img alt="Purple Cake" src={pc}></button>{/if}
</div>
