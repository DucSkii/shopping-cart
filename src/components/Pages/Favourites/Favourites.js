import React from 'react'
import Page from '../../Page/Page'
import FavouriteItems from '../../Items/FavouriteItems/FavouriteItems'
import Navigation from '../../Navigation/Navigation'
import { useStateValue } from '../../../context/StateContext'
import './Favourites.scss'

const Favourites = () => {

  const [{favouritesList}, dispatch ] = useStateValue()
  const renderList = () => {
    return favouritesList.map((favourites, index) => {
      return <FavouriteItems
        key={index}
        id={favourites.id}
        quantity={favourites.quantity}
        name={favourites.name}
        cost={favourites.cost}
        image={favourites.image}
        colour={favourites.color}
        desc1={favourites.desc1}
        desc2={favourites.desc2}
        desc3={favourites.desc3}
        gender={favourites.gender}
      />
    })
  }

  return (
    <div>
      <Navigation />
      <Page className='favouriteList' title="Favourites">
        {renderList()}
      </Page>
    </div>
  )
}

export default Favourites