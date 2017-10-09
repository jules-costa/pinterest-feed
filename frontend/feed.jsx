import React from 'react';
import FeedItem from './feed_item';
import InfiniteScroll from 'infinite-scroll';

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let element = document.querySelector('.masonry');
    let infScroll = new InfiniteScroll(element, {
      path: function() {
        let pageNumber = ( this.loadCount + 1 ) * 10;
        return '/pins';
      },
      append: '.item',
      history: false,
    });
  }

  render () {
    const { items } = this.props;
    return(
      <div className="masonry">
        {items.map((item, i) => (
          <FeedItem key={item.id} item={item} />
        ))}
      </div>
    );
  }
}
