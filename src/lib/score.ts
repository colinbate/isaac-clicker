import { derived, writable } from "svelte/store";
import type { Bonus, BonusUnit } from "./types";

interface Data {
  score: number;
  amounts: Record<BonusUnit, number>;
}

const data = writable<Data>({ score: 0, amounts: { click: 1, second: 0, boost: 0 } })

export const score = derived(data, (current, set) => set(current.score), 0);

export function addBonus(bonus: Bonus) {
  data.update(current => {
    if (current.score < bonus.cost) return current;
    if (bonus.unit === 'boost') {
      return { score: Math.floor(current.score * 1.25), amounts: current.amounts };
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

export function doClick() {
  data.update(current => ({
    score: current.score + current.amounts.click,
    amounts: { ...current.amounts }
  }));
}
