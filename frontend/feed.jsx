import React from 'react';
import FeedItem from './feed_item';
import { fetchItems } from './util/api_util';

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
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)
    ) {
      fetchItems(20)
      .then(items => this.props.updateState(items));
    }
  }

  render () {
    const { items } = this.props;
    return(
      <div className="masonry">
        {items.map((item, i) => (
          <FeedItem key={i} item={item} />
        ))}
      </div>
    );
  }
}
