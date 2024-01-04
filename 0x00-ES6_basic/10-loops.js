export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (const arr of array) {
    const idx = array.indexOf(arr);
    newArr[idx] = appendString + arr;
  }

  return newArr;
}
