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
    this.fetchAllItems();
  }

  fetchAllItems() {
    fetch('/pins')
    .then(resp => resp.json())
    .then(json => this.setState({items: Object.values(json)}))
    .catch(err => console.log('parsing failed', err));
  }

  fetchMoreItems() {
    fetch('/more')
    .then(resp => resp.json())
    .then(json => {
      let items = this.state.items.concat(Object.values(json));
      console.log(items);
      this.setState({items: items});
    })
    .catch(err => console.log('parsing failed', err));
  }

  render() {
    return (
      <Feed items={this.state.items} fetchMoreItems={this.fetchMoreItems.bind(this)} />
    );
  }
}
