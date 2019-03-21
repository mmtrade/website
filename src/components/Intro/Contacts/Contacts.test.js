import React from 'react';
import renderer from 'react-test-renderer';
import Contacts from './Contacts';

describe('Icon', () => {
  const props = {
    contacts: {
      discord: '#',
      gmail: '#',
      github: '#'
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Contacts {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
