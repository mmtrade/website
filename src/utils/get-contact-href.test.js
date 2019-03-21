import getContactHref from './get-contact-href';

test('getContactHref', () => {
  expect(getContactHref('github', '#')).toBe('https://github.com/#');
  expect(getContactHref('discord', '#')).toBe('#');
  expect(getContactHref('gmail', '#')).toBe('mailto:#');
  expect(getContactHref('email', '#')).toBe('#');
});
