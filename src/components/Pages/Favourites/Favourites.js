import React from 'react'
import Page from '../../Page/Page'
import Items from '../../Items/Items'
import './Favourites.scss'

const Favourites = () => {

  return (
    <div>
      <Page className='favouriteList' title="Favourites">
        <Items />
      </Page>
    </div>
  )
}

export default Favourites