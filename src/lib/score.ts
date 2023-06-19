import { derived, writable } from "svelte/store";
import type { Bonus, BonusUnit } from "./types";
import { createCounter } from "./counter";
import { get, set } from "idb-keyval";
import { throttle } from './throttle';

interface Data {
  score: number;
  amounts: Record<BonusUnit, number>;
}

const data = writable<Data>({ score: 0, amounts: { click: 1, second: 0, boost: 0 } });


const dataKey = 'ICdata';
function saveData(tosave: Data) {
  set(dataKey, tosave);
}

const saveThrottled = throttle(saveData, 150);

async function loadData() {
  const loaded = await get<Data>(dataKey);
  if (loaded) {
    data.set(loaded);
  }
  data.subscribe(current => saveThrottled(current));
}

loadData();

export const score = derived(data, (current, set) => set(current.score), 0);

export const counter = createCounter(1000);
let counting = false;

export function addBonus(bonus: Bonus) {
  data.update(current => {
    if (current.score < bonus.cost) return current;
    if (bonus.unit === 'boost') {
      return { score: Math.max(50, Math.floor(current.score * 1.35)), amounts: current.amounts };
    }
    return {
      score: current.score - bonus.cost,
      amounts: {
        ...current.amounts,
        [bonus.unit]: current.amounts[bonus.unit] + bonus.amount,
      }
    };
  });
}

export function resetScore() {
  data.set({
    score: 0,
    amounts: { click: 1, second: 0, boost: 0 },
  });
}

export function doClick() {
  if (!counting) {
    counter.reset();
    counting = true;
  }
  data.update(current => ({
    score: current.score + current.amounts.click,
    amounts: { ...current.amounts }
  }));
}

export function doSecond() {
  data.update(current => ({
    score: current.score + current.amounts.second,
    amounts: { ...current.amounts }
  }));
}
