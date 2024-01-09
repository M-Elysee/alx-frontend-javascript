export default function cleanSet(set, startString) {
  if (!startString || !startString.length || typeof startString !== 'string') return '';
  const str = [...set]
    .filter((el) => el.startsWith(startString))
    .reduce((acc, el) => {
      const elm = el.slice(startString.length);
      return `${acc}-${elm}`;
    }, '');
  return str.slice(1);
}
