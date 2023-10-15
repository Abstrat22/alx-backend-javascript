export default function hasValuesFromArray(set, array) {
  if (Array.isArray(array) && set instanceof Set) {
    for (const value of array) {
      if (!set.has(value)) {
        return false;
      }
    }
    return true;
  }
  throw new Error('Invalid argument types:  Set and Array required');
}
