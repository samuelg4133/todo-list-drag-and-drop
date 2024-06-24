type PromiseHandler<Res = void> = () => Res;

export function promiser(handler: PromiseHandler, delay: number) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(handler()), delay);
  });
}
