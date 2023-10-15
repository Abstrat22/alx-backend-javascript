export default function cleanSet(set, startString) {
  if (startString instanceof 'string') {
    const filteredSet = [...set]
      .filter((value) => value
        .startsWith(startString) && startString !== '');
    return filteredSet.join('-')
      .replace(new RegExp(startString, 'g'), '');
  }
  return '';
}
