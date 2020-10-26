import React from 'react'

import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Filter from './components/Filter/Filter'
import Page from './components/Page/Page'

import './App.scss'

class App extends React.Component {
  state = {

  }

  render() {

    return (
      <div className="App">
        <div className="App-bar" />
        <Header />
        <Navigation />
        <Filter />
        <Page />
      </div>
    )
  }
}

export default App