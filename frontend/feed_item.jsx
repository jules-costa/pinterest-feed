import React from 'react';

export default class FeedItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    return (
      <div className="item">
        <a href={item.link}>
          <img src={item.image}></img>
        </a> 
        <h5>{item.description}</h5>
      </div>
    );
  }
}
