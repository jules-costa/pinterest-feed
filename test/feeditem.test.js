import React from 'react';
import ReactDOM from 'react-dom';
import FeedItem from '../frontend/feed_item';
import renderer from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

describe('Component: FeedItem', () => {
  it('should render an item description', () => {
    const wrapper = shallow(
      <ItemDescription description="cute cat" />
    );
    expect(wrapper.prop('description')).toEqual('cute cat');
  });
});
