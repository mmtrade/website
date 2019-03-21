const getContactHref = (name, contact) => {
  let href;

  switch (name) {
    case 'github':
      href = `https://github.com/${contact}`;
      break;
    case 'discord':
      href = contact;
      break;
    case 'gmail':
      href = `mailto:${contact}`;
      break;
    default:
      href = contact;
      break;
  }

  return href;
};

export default getContactHref;
