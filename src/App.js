import React from 'react'

import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Earrings from './components/Pages/Earrings/Earrings'
import Necklaces from './components/Pages/Necklaces/Necklaces'
import Watches from './components/Pages/Watches/Watches'
import Home from './components/Pages/Home/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.scss'

const App = () => {

  return (
    <div className="App">
      <div className="App-bar" />
      <Router>
        <Header />
        <Navigation />
        <Switch>
          <Route path='/earrings' component={Earrings} />
          <Route path='/necklaces' component={Necklaces} />
          <Route path='/watches' component={Watches} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
      {/* <Watches gender={gender} setGender={setGender} /> */}
      {/* <Necklace /> */}
    </div>
  )
}

export default App