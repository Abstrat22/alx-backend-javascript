export default function createInt8TypedArray(length, position, value) {
  const arrayBuffer = new ArrayBuffer(length);
  if (length < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  // A view instance to work with Int8 datatypes on the the Allocated buffer
  const dataView = new DataView(arrayBuffer);
  dataView.setInt8(position, value); // set data on the allocated buffer

  return dataView;
}
