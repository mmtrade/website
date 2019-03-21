import { ICONS } from '../constants';

const getIcon = (name) => {
  let icon;

  switch (name) {
    case 'github':
      icon = ICONS.GITHUB;
      break;
    case 'discord':
      icon = ICONS.DISCORD;
      break;
    case 'gmail':
      icon = ICONS.GMAIL;
      break;
    default:
      icon = {};
      break;
  }

  return icon;
};

export default getIcon;
