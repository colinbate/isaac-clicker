<script>
  import { useRegisterSW } from 'virtual:pwa-register/svelte';
  import { slide } from 'svelte/transition';
  const {offlineReady, needRefresh, updateServiceWorker} = useRegisterSW({
      onRegistered(swr) {
          console.log(`SW registered: ${swr}`);
      },
      onRegisterError(error) {
          console.log('SW registration error', error);
      },
      onOfflineReady() {
          console.log('SW ready for offline')
          setTimeout(() => close(), 5000)
      }
  });
  function close() {
      offlineReady.set(false)
      needRefresh.set(false)
  }
  $: toast = $offlineReady || $needRefresh;
</script>

{#if toast}
  <div class="fixed right-0 bottom-0 m-4 p-6 rounded shadow z-[100] bg-white dark:bg-gray-950 border-svelte border max-w-sm" transition:slide role="alert">
    <div class="mb-4">
      <span>&#127881;</span>
      {#if $offlineReady}
        <span>
          This site is ready to use offline.
        </span>
      {:else}
        <span>
          A new version of this site is available! Click the reload button to update.
        </span>
      {/if}
    </div>
    <div class="flex gap-4">
      {#if $needRefresh}
        <button class="py-1 px-4 rounded-md bg-svelte" on:click={() => updateServiceWorker(true)}>
          Reload
        </button>
      {/if}
      <button class="py-1 px-4 rounded-md bg-svelte" on:click={close}>
        Close
      </button>
    </div>
  </div>
{/if}