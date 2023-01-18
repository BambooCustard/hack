import * as React from 'react';


const noBullets = {
  listStyleType: "none"
}

const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);

  };
  return (
    <div>
      <div>
        <label htmlFor="search">Pick a book: </label>
        <input id="search" type="text" onChange={handleChange} />
      </div>
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
}

function List(props) {
  console.log('List renders');
  return (
    <div>
      <ul style={noBullets}>
        {props.list.map((item) => (
          <ListItem key={item.objectID} item={item} />
        ))}
      </ul>
    </div>
  );
}

function ListItem(props) {
  let arrayKey = props.item.objectID;

  console.log('List Item renders:', arrayKey);
  return (
    <li>
      <span >
        <a href={props.item.url}>{props.item.title}</a>
      </span>
      <span style={{ color: "yellow" }}>{props.item.author}</span>
      <span>{props.item.num_comments}</span>
      <span>{props.item.points}</span>
    </li>
  );
}

function App() {

  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walker',
      num_comments: 999,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux3',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  console.log('App renders');

  return (
    <div>
      <h1>Books R US</h1>
      <Search />

      <hr />

      <List list={stories} />
    </div>
  );
}

export default App;