import React from 'react';
import renderer from 'react-test-renderer';

describe('App component', () => {
  xtest('App should match snapshot', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
