import React from 'react'

import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <Header />
        <Navigation />
      </div>
    )
  }
}

export default App