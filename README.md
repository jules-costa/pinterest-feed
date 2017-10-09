# Pinterest Feed

First off, I love cats, so thanks for making this extra enjoyable for me!

I used Rails 5 with a Postgres database and React on the front end to design a modular, reusable feed of Pin objects.

ActiveRecord provides a convenient [json datatype](http://edgeguides.rubyonrails.org/active_record_postgresql.html#json-and-jsonb) to store all pin data as JSON under the key 'payLoad'. I decided this was the fastest and most straightforward way to parse and store the provided json data. In reality, the schema would be normalized and pins would hold foreign keys corresponding to the pinner, comments, board, etc.

I'm using `fetch` to retrieve all pins when the Root component mounts, and storing them as state. The pins are then passed as props to a Feed component, which maps over them and generates FeedItem components, each receiving a single pin as props.

Pinterest is known for its visually engaging and responsive masonry layout. I looked into using (Masonry library)[https://masonry.desandro.com/], CSS3 grid or Bootstrap, but they all seemed too robust for the sake of this project. I used pure CSS to achieve the masonry effect instead, referencing (this)[http://w3bits.com/css-masonry/] helpful guide.

I implemented infinite scrolling from scratch by triggering event callbacks on `componentDidMount` and `componentWillUnmount`. I wanted to send an argument along with the GET request in order to conditionally send up all pins or a random sample of 15, but `fetch()` does not allow it. I decided to create an unRESTful route `GET '/more', to: 'pins#more'` to fetch a sample of pins. I could've used AJAX instead, but I wanted to avoid importing the entire library.
