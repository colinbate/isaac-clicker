import type { TransitionConfig } from 'svelte/transition';
import { cubicOut } from 'svelte/easing';

interface PeekParams {
  duration?: number;
  easing?: (t: number) => number;
  side?: 'b' | 't' | 'l' | 'r';
}

const ROTATE = {
  b: 0,
  t: 180,
  l: 90,
  r: -90,
};

export function peek(
	node: Element,
	{ duration = 400, easing = cubicOut, side = 'b' }: PeekParams = {}
): TransitionConfig {
  const sign = side === 't' || side === 'l' ? -1 : 1;
  const axis = side === 't' || side === 'b' ? 'Y' : 'X';
  const rotate = ROTATE[side]; 
	return {
		delay: 0,
		duration,
		easing,
		css: (t) => `transform: translate${axis}(${sign * (((1 - t) * 40) + 67)}%) rotate(${rotate}deg)`,  
	};
}