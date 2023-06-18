<script lang="ts">
  import Footer from './lib/Footer.svelte';
import Game from './lib/Game.svelte';
  import ModeSwitcher from './lib/ModeSwitcher.svelte';
</script>

<ModeSwitcher />
<main class="p-4 mx-auto text-center max-w-4xl">
	<h1 class="text-4xl md:text-6xl mb-3 leading-normal text-svelte">Isaac Clicker!</h1>
	<Game />
	<Footer />
</main>

<style global>
	button {
		-webkit-tap-highlight-color: transparent;
		touch-action: manipulation;
	}
	</style>