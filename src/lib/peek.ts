import type { TransitionConfig } from 'svelte/transition';
import { cubicOut } from 'svelte/easing';

interface PeekParams {
  duration?: number;
  easing?: (t: number) => number;
  side?: 'b' | 't' | 'l' | 'r';
}

export function peek(
	node: Element,
	{ duration = 400, easing = cubicOut, side = 'b' }: PeekParams = {}
): TransitionConfig {
	const style = getComputedStyle(node);
	const transform = style.transform === 'none' ? '' : style.transform;
	return {
		delay: 0,
		duration,
		easing,
		css: (t, u) => `transform: ${transform} translateY(${((1 - t) * 33) + 67}%)`,
	};
}