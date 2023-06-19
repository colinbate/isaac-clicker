import { writable, type Readable } from "svelte/store";

interface Counter extends Readable<number> {
  reset: () => void;
}

export function createCounter(interval: number): Counter {
  const internal = writable(0);
  let timer: NodeJS.Timer;
  const reset = () => {
    internal.set(0);
    if (!timer) {
      timer = setInterval(() => internal.update(x => x + 1), interval);
    }
  }
  return {
    subscribe: internal.subscribe,
    reset
  };
}

