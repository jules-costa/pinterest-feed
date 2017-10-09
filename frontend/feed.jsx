import React from 'react';
import FeedItem from './feed_item';

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    // console.log(this.props);
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)
    ) {
      this.props.fetchMoreItems();
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
