import React from 'react';

export default class FeedItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    return (
      <div className="item">
        <img src={item.small}></img>
      </div>
    );
  }
}

// <h3>{item.title}</h3>
// <h5>{item.description}</h5>
