export type BonusUnit = 'second' | 'click' | 'boost';

export interface Bonus {
  id: string;
  label: string;
  desc?: string;
  cost: number;
  amount: number;
  unit: BonusUnit;
}

export type Store = Bonus[];

