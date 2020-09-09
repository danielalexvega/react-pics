import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos',{
      params: {query: term},
      headers:{
        Authorization: 'Client-ID Hi68G68CAarJLw0fBy1BH9kg4fbSMSh5JctZQnO3K0M'
      }
    });
  }

  render() {
    return <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSubmit={this.onSearchSubmit}/>
    </div>
  };
}

export default App;