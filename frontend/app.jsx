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

  // fetchAllItems() {
  //   fetch('/pins')
  //   .then(resp => resp.json())
  //   .then(json => this.setState({items: Object.values(json)}))
  //   .catch(err => console.log('parsing failed', err));
  // }
  //
  // fetchMoreItems() {
  //   fetch('/more')
  //   .then(resp => resp.json())
  //   .then(json => {
  //     let items = this.state.items.concat(Object.values(json));
  //     this.setState({items: items});
  //   })
  //   .catch(err => console.log('parsing failed', err));
  // }

  render() {
    // console.log("here");
    return (
      <Feed items={this.state.items} fetchItems={this.fetchItems.bind(this)} />
    );
  }
}
