export default function validatePhoneNumber(number) {
  const str = number.replace(/\D/g, '');

  if (str.length === 11) {
    return `+7${str.slice(1)}`;
  }

  return `+${str}`;
}
