import React from 'react';
import renderer from 'react-test-renderer';
import Intro from './Intro';

describe('Intro', () => {
  const props = {
    intro: {
      title: 'test',
      subtitle: 'test',
      background: 'test'
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Intro {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
