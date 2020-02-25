import React, { Component } from 'react';
import './App.css';
import MangaRow from './components/MangaRow.js'
import $ from 'jquery'
import Navbar from './components/Navbar.jsx'
import { Search } from './components/Search.jsx'
import { LoginModal, SignModal } from './components/Modals'
import { register, login} from './components/functions'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      rows: [],
      sign: false,
      login: false,
      registerUsername: '',
      registerEmail: '',
      registerPassword: '',
      loginUsername: '',
      loginPassword: '',
      disabled: false
    }

    this.performSearch("pokemon")

    this.onChange = this.onChange.bind(this)
    this.onRegisterSubmit = this.onRegisterSubmit.bind(this)
    this.onLoginSubmit = this.onLoginSubmit.bind(this)
  }

  // open the sign up form
  onOpenModal = () => {
    this.setState({ sign: true });
  };

  // open the login form
  onOpenModalLogin = () => {
    this.setState({ login: true });
  };

  // clear sign form and close it
  onCloseModal = () => {
    this.setState({
      registerUsername: '',
      registerEmail: '',
      registerPassword: '',
      sign: false
    })
  };

  // clear login form and close it
  onCloseModalclose = () => {
    this.setState({ 
      login: false ,
      loginUsername: '',
      loginPassword: ''
    });
  };

  // change layout 
  onUserClick = (e) => {
    e.preventDefault()
    this.setState({
      disabled: true,
      rows:[]
    })
    console.log(this.state.disabled)
  }

  logOut = () => {
    localStorage.removeItem("usertoken")
    localStorage.removeItem("username")
    this.setState({ token: undefined})
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onRegisterSubmit(e) {
    e.preventDefault()

    const newUser = {
      username: this.state.registerUsername,
      email: this.state.registerEmail,
      password: this.state.registerPassword
    }

    register(newUser).then(res => {
      this.onCloseModal()
    })
  }

  onLoginSubmit(e) {
    e.preventDefault()

    const user = {
      username: this.state.loginUsername,
      password: this.state.loginPassword
    }

    login(user).then(res => {
      if (res) {
        this.onCloseModalclose()
      }
    })
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
          const mangaRow = <MangaRow key={manga.id} manga={manga} />
          mangaRows.push(mangaRow)
        })

        this.setState({ rows: mangaRows })
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
    const { login, sign } = this.state;
    return (
      <div>

        <Navbar
          onOpenModalLogin={this.onOpenModalLogin}
          onOpenModal={this.onOpenModal}
          logOut={this.logOut}
          token={localStorage.usertoken}
          onUserClick={this.onUserClick}
        />

        <Search 
          handleChange={this.searchChangeHandler.bind(this)} 
          disabled={this.state.disabled}
        />

        {this.state.rows}
        <LoginModal 
          login={login} 
          onClose={this.onCloseModalclose} 
          onChange={this.onChange}
          onLoginSubmit={this.onLoginSubmit}
          loginUsername={this.state.loginUsername}
          loginPassword={this.state.loginPassword}
        />
        <SignModal
          sign={sign}
          onClose={this.onCloseModal}
          onChange={this.onChange}
          onRegisterSubmit={this.onRegisterSubmit}
          registerUsername={this.state.registerUsername}
          registerEmail={this.registerEmail}
          registerPassword={this.registerPassword}
        />
      </div>
    );
  }
}

export default App;
