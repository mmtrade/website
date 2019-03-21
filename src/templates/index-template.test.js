import React from 'react';
import renderer from 'react-test-renderer';
import IndexTemplate from './index-template';

describe('IndexTemplate', () => {
  const props = {
    data: {
      site: {
        siteMetadata: {
          title: 'test',
          subtitle: 'test',
          intro: {
            title: 'test',
            subtitle: 'test',
            background: 'test',
            contacts: {
              discord: '#',
              gmail: '#',
              github: '#'
            }
          }
        }
      }
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(<IndexTemplate {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
