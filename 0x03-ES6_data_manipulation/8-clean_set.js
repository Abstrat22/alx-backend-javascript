export default function cleanSet(set, startString) {
  if (typeof startString === 'string') {
    const filteredSet = [...set].filter((value) => typeof value === 'string' && value.startsWith(startString) && startString !== '').map((value) => value.replace(new RegExp(`^${startString}`), '')).join('-');
    return filteredSet;
  }
  return '';
}
