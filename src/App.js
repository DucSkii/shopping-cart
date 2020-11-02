import React, {useEffect} from 'react'

import Header from './components/Header/Header'
import Earrings from './components/Pages/Earrings/Earrings'
import Necklaces from './components/Pages/Necklaces/Necklaces'
import Watches from './components/Pages/Watches/Watches'
import Home from './components/Pages/Home/Home'
import Cart from './components/Pages/Cart/Cart'
import Favourites from './components/Pages/Favourites/Favourites'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.scss'
import { useStateValue } from './context/StateContext'

const App = () => {

  const [{favouritesList, cartList}, dispatch ] = useStateValue()
  // const [{cartList}, cartDispatch ] = useStateValue()
  
  useEffect(() => {
    const rawFavourites = localStorage.getItem('favouritesList')
    if(rawFavourites) {
      dispatch({ type: 'initial-load', payload: JSON.parse(rawFavourites)})
    }}, [])
  useEffect(() => {
    localStorage.setItem('favouritesList', JSON.stringify(favouritesList))
  }, [favouritesList])

  // useEffect(() => {
  //   const rawCart = localStorage.getItem('cartList')
  //   if(rawCart) {
  //     cartDispatch({ type: 'initial-load-cart', payload: JSON.parse(rawCart)})
  //   }}, [])
  // useEffect(() => {
  //   localStorage.setItem('cartList', JSON.stringify(cartList))
  // }, [cartList])

  return (
    <div className="App">
      <div className="App-bar" />
      <Router>
        <Header />
        <Switch>
          <Route path='/favourites' component={Favourites} />
          <Route path='/cart' component={Cart} />
          <Route path='/earrings' component={Earrings} />
          <Route path='/necklaces' component={Necklaces} />
          <Route path='/watches' component={Watches} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

export default App