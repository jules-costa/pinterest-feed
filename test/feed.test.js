import React from 'react';
import ReactDOM from 'react-dom';
import Feed from '../frontend/feed';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

it('should render an item ', () => {
  const tree = toJson(shallow(<Feed items={[]} />));
  expect(tree).toMatchSnapshot();
});

it('should match its snapshot with items', () => {
  const items = ['cute cat', 'adorable', 'I love!'];
  const tree = renderer.create(
    <Feed items={items} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
