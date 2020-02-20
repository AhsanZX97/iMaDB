import React, { Component } from 'react';
import './App.css';
import MangaRow from './components/MangaRow.js'
import $ from 'jquery'
import Navbar from './components/Navbar.jsx'
import { Search } from './components/Search.jsx'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      rows: []
    }

    this.performSearch("full metal")
  }

  performSearch(searchTerm) {
    var search = searchTerm.split(' ').join('+');
    $.ajax({
      method: 'GET',
      url: 'https://jikan1.p.rapidapi.com/search/manga?q=' + search,
      headers: {
        'x-rapidapi-host': 'jikan1.p.rapidapi.com',
        'x-rapidapi-key': 'f3520ecd16mshf614923f40af9c2p149634jsn183d425025eb'
      },
      success: (searchResults) => {
        const results = searchResults.results

        var mangaRows = []

        results.forEach((manga) => {
          const mangaRow = <MangaRow key={manga.id} manga={manga}/>
          mangaRows.push(mangaRow)
        })

        this.setState({rows: mangaRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }

  searchChangeHandler(event) {
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }

  render() {
    return (
      <div>

        <Navbar />

        <Search handleChange={this.searchChangeHandler.bind(this)} />

        {this.state.rows}

      </div>
    );
  }
}

export default App;
