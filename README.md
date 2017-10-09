# Pinterest Feed

First off, I love cats, so thanks for making this extra enjoyable for me!

### Setup Guide

To view my project, ensure Postgres is running, run:

`bundle exec rails db:setup`

`npm run webpack`

`rails s`

and navigate to localhost:3000

### Process

I used Rails 5 with a Postgres database and React on the front end to design a modular, reusable feed of Pin objects.

ActiveRecord provides a convenient [json datatype](http://edgeguides.rubyonrails.org/active_record_postgresql.html#json-and-jsonb) to store all pin data as JSON under the key 'payLoad'. I decided this was the fastest and most straightforward way to parse and store the provided json data. In reality, the schema would be normalized and pins would hold foreign keys corresponding to the pinner, comments, board, etc.

For reusability, I chose generic names that can be applied to a variety of widgets. I'm using AJAX to retrieve all items when the `App` component mounts, and storing the items as state. The items are then passed as props to a `Feed` component, which maps over them and generates `FeedItem` components, each receiving a single item as props.
```javascript
componentDidMount() {
  this.fetchItems()
  .then(items => this.setState({items: Object.values(items)}));
}
```

Pinterest is known for its visually engaging and responsive masonry layout. I looked into using [Masonry library](https://masonry.desandro.com/), CSS3 grid or Bootstrap, but they all seemed too robust for the sake of this project. I used pure CSS to achieve the masonry effect instead, referencing [this](http://w3bits.com/css-masonry/) helpful guide.

I implemented infinite scrolling from scratch by triggering event callbacks on `componentDidMount` and `componentWillUnmount`. I sent some data along with the GET request in order to conditionally send up all items or a random sample of `num` items.
```ruby
def index
  if params["num"]
    @pins = Pin.all.sample(params["num"].to_i)
  else
    @pins = Pin.all
  end
end
```
I implemented setTimeout to make scrolling feel more natural for the user.

### Future Goals

Implementing a spinning loader to improve the UX for infinite scrolling, as well as building a modular React modal to view a single item when a user clicks on it.
