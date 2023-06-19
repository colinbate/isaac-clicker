<script lang="ts">
  import { peek } from './peek';
  import isaac from '../isaac.webp';
  import pc from '../purple-cake.webp';
  import { randInt } from './rand';
  import { addBonus, counter } from './score';
  const sides = [
    'bottom-0 translate-y-2/3',
    'top-0 -translate-y-2/3 rotate-180',
    'left-0 -translate-x-2/3 rotate-90',
    'right-0 translate-x-2/3 -rotate-90'
  ]
  const peekInfo = [
    {side: 'b'},
    {side: 't'},
    {side: 'l'},
    {side: 'r'},
  ] as const;
  let showBoost = false;
  let boostTimer = randInt(20, 10);
  let randSide = 0;
  let boostTimeout: NodeJS.Timeout;
  const boost = { label: 'Boost', id: 'boost', cost: 0, amount: 0, unit: 'boost' } as const;


  function resetBoost() {
    showBoost = false;
    boostTimer = randInt(20, 10);
    counter.reset();
  }

  function handleBoost() {
    if (boostTimeout) {
      clearTimeout(boostTimeout);
      boostTimeout = null;
    }
    addBonus(boost);
    resetBoost();
  }

  $: {
    if ($counter === boostTimer) {
      randSide = randInt(4);
      showBoost = true;
      boostTimeout = setTimeout(resetBoost, 6000);
      boostTimer = -1;
    }
  }
</script>
<div class="flex flex-col items-center justify-center h-full p-8 overflow-hidden relative">
  <button class="animate-wiggle" on:click><img src={isaac} alt="Isaac's Face"></button>
  {#if showBoost}<button transition:peek={peekInfo[randSide]} type="button" class="absolute {sides[randSide]}" on:click={handleBoost}><img alt="Purple Cake" src={pc}></button>{/if}
</div>
