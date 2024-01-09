export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const bfr = new ArrayBuffer(length);
  const vw = new DataView(bfr);
  vw.setInt8(position, value);
  return vw;
}
