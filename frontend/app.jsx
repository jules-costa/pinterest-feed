import React from 'react';
import Feed from './feed';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
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
    let keepers = this.state.items;
    let newItems = Object.values(items);
    this.setState({
      items: keepers.concat(newItems)
    });
  }

  render() {
    return (
      <Feed items={this.state.items} fetchItems={this.fetchItems.bind(this)} updateState={this.updateState.bind(this)} />
    );
  }
}
