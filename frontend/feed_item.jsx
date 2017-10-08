import React from 'react';

export default class FeedItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    return (
      <h6>{item.description}</h6>
    );
  }
}
