import validatePhoneNumber from '../phones';

test.each([
  ['starting with 8 and consisting of 11 digits', '8 (927) 000-00-00', '+79270000000'],
  ['starting with +7 and consisting of 11 digits', '+7 960 000 00 00', '+79600000000'],
  ['consisting of more than 11 digits', '+86 000 000 0000', '+860000000000'],
])('testing validatePhoneNumber function with number %s', (_, number, expected) => {
  const result = validatePhoneNumber(number);

  expect(result).toBe(expected);
});
