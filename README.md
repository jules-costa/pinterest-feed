# Pinterest Feed

First off, I love cats, so thanks for making this extra enjoyable for me!

I used Rails 5 with a Postgres database and React on the front end to design a modular, reusable feed of Pin objects.

ActiveRecord provides a convenient [json datatype](http://edgeguides.rubyonrails.org/active_record_postgresql.html#json-and-jsonb) to store all pin data as JSON under the key 'payLoad'. I decided this was the fastest and most straightforward way to parse and store the provided json data. In reality, the schema would be normalized and pins would hold foreign keys corresponding to the pinner, comments, board, etc.

I'm using `fetch` to retrieve all pins when the Root component mounts, and storing them as state. The pins are then passed as props to a Feed component, which maps over them and generates FeedItem components, each receiving a single pin as props.
