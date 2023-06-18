const MAX_INT = 2147483647;

export function rand() {
  const crypto = window.crypto || (window as any).msCrypto;
  if (crypto) {
    const a = new Uint32Array(1);
    crypto.getRandomValues(a);
    return (a[0] & MAX_INT) / MAX_INT;
  } else {
    return Math.random();
  }
}

export function randInt(max: number, min = 0) {
  return Math.floor((max - min) * rand()) + min;
}