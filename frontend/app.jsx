import React from 'react';
import Feed from './feed';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.fetchItems = this.fetchItems.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    this.fetchItems()
    .then(items => this.setState({items: Object.values(items)}));
  }

  fetchItems(num) {
    return (
      $.ajax({
        method: 'GET',
        url: '/pins',
        data: {num}
      })
    );
  }

  updateState(items) {
    let newItems = Object.values(items);
    this.setState({
      items: this.state.items.concat(newItems)
    });
  }

  render() {
    return (
      <Feed items={this.state.items} fetchItems={this.fetchItems} updateState={this.updateState} />
    );
  }
}
