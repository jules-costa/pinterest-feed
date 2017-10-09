import React from 'react';
import Feed from './feed';
import { fetchItems } from './util/api_util';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    fetchItems()
    .then(items =>
      this.setState({
        items: Object.values(items)
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
      <Feed items={this.state.items} updateState={this.updateState} />
    );
  }
}
