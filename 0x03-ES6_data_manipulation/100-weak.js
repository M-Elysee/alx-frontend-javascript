export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let num = weakMap.get(endpoint) || 0;
  num += 1;
  weakMap.set(endpoint, num);
  if (num >= 5) {
    throw Error('Endpoint load is high');
  }
  return num;
}
