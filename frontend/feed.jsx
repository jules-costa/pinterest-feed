import React from 'react';
import FeedItem from './feed_item';

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { items } = this.props;
    return(
      <div>
        {items.map((item, i) => (
          <FeedItem key={item.id} item={item} />
        ))}
      </div>
    );
  }
}
