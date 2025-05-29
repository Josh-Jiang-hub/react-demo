export const loadingData = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('data');
    }, 2000);
  });

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
