export default function appendToEachArrayValue(array, appendString) {
  for (let arr of array) {
    let idx = array.indexOf(arr);
    array[idx] = appendString + arr;
  }

  return array;
}
