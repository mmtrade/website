import getIcon from './get-icon';
import { ICONS } from '../constants';

test('getIcon', () => {
  expect(getIcon('github')).toBe(ICONS.GITHUB);
  expect(getIcon('discord')).toBe(ICONS.DISCORD);
  expect(getIcon('gmail')).toBe(ICONS.GMAIL);
  expect(getIcon('telegram')).toEqual({ });
});
