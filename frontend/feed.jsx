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
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500)
    ) {
      this.props.fetchItems(20)
      .then(items => setTimeout(this.props.updateState(items), 3000));
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
