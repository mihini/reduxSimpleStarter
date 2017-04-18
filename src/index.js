import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAubJRAwimlWYowV7Rso1lizeg8v4vnc0g';


const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  );
}

// <App/></App>
// or <App/> if there is nothing inside

ReactDOM.render(<App/>, document.querySelector('.container'));
