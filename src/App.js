import React, { useState } from 'react'

import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Filter from './components/Filter/Filter'
import Watches from './components/Pages/Watches'

import './App.scss'

const App = () => {
  const [ gender, setGender ] = useState('All')

  return (
    <div className="App">
      <div className="App-bar" />
      <Header />
      <Navigation />
      <Filter gender={gender} setGender={setGender} />
      {/* <Switch>
        <Route path='/watches' component={Watch}>
        <Route path='/' component={Homepage}/>
      </Switch> */}
      <Watches gender={gender} />
      {/* <Necklace /> */}
    </div>
  )
}

export default App