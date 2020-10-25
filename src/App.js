import React from 'react'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Filter from './components/Filter/Filter'

class App extends React.Component {
  state = {

  }

  render() {

    return (
      <div className="App">
        <Header />
        <Navigation />
        <Filter />
      </div>
    )
  }
}

export default App