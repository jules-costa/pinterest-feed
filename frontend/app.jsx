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
    fetch('/pins').then((resp) => {
      return resp.json();
    }).then((json) => {
      const items = json;
      this.setState({items: Object.values(items)});
    }).catch((err) => {
      console.log('parsing failed', err);
    });
  }

  render() {
    return (
      <Feed items={this.state.items} />
    );
  }
}