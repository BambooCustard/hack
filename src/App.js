import * as React from 'react';


const noBullets = {
  listStyleType: "none"
}

const Search = ({ search, onSearch }) => (
  <div>
    <div>
      <label htmlFor="search">Pick a book: </label>
      <input
        id="search"
        type="text"
        value={search}
        onChange={onSearch} />
    </div>
    <p>
      Searching for <strong>{search}</strong>
    </p>
  </div>
);


function List({ list }) {
  console.log('List renders');
  return (
    <div>
      <ul style={noBullets} >
        {list.map((item) => (
          <ListItem key={item.objectID} item={item} />
        ))}
      </ul>
    </div>
  );
}

function ListItem({
  item: {
    objectID,
    title,
    url,
    author,
    num_comments,
    points,
  },
}) {

  console.log('List Item renders:', objectID);
  return (
    <li>
      <span >
        <a href={url}>{title}</a>
      </span>
      <span style={{ color: "yellow" }}>{author}</span>
      <span>{num_comments}</span>
      <span>{points}</span>
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
  const [searchTerm, setSearchTerm] = React.useState('x');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);

  };

  const searchedStories = stories.filter(function (story) {
    return story.title.includes(searchTerm);
  });


  return (
    <div>
      <h1>Books R US</h1>
      <Search search={searchTerm} onSearch={handleChange} />

      <hr />

      <List list={searchedStories} />
    </div>
  );
}

export default App;