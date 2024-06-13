/* eslint-disable prettier/prettier */
import React from 'react';
import renderer from 'react-test-renderer';
import MyComponent from '../src/screens/MyComponent';

test('props testing', () => {
  const AppRef = renderer.create(<MyComponent name={'kkk'} />).getInstance();
  console.log('AppRef', AppRef.props);
  // expect(snapshot).toMatchSnapshot();
});
