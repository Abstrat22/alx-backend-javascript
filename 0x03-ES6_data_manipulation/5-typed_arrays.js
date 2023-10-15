export default function createInt8TypedArray(length, position, value) {
  const arrayBuffer = new ArrayBuffer(length);
  // A view instance to work with Int8 datatypes on the the Allocated buffer
  const int8view = new Int8Array(arrayBuffer);
  if (length < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  int8view[position] = value;
  return arrayBuffer;
}
