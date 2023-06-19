export function throttle<T extends (...args: any) => void>(fn: T, interval: number) {
  let enableCall = true;
  return function(...args: Parameters<T>) {
    if (!enableCall) return;
    enableCall = false;
    fn.apply(this, args);
    setTimeout(() => enableCall = true, interval);
  }
}