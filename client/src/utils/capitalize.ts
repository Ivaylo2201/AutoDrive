export default function capitalize(str: string) {
  const words = str.split(' ');

  if (words.length > 1) {
    return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
  }

  return str.charAt(0).toUpperCase() + str.slice(1);
}
