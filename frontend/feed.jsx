import React from 'react';
import FeedItem from './feed_item';
import InfiniteScroll from 'infinite-scroll';

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)
      && this.props.list.length
    ) {
      this.props.onPaginatedSearch();
    }
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
