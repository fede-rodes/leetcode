export function fibonacci(steps: number): number[] {
  let l = 1;
  let r = 1;
  let fib;

  const fibo: number[] = [l, r];

  for (let i = 0; i < steps; i++) {
    fib = l + r;
    fibo.push(fib);

    l = r;
    r = fib;
  }

  return fibo;
}
