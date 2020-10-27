import React from 'react'

import { getWatches } from '../../data/watches'

import Page from '../Page/Page'
import Items from '../Items/Items'

const Watches = ({ gender }) => {

  return (
    <Page className='watches' title="Watches" gender={gender}>
      {getWatches().map((watch, index) => {
        return <Items key={index} name={watch.name} cost={watch.cost} image={watch.image.url} colour={watch.image.colour} />
      })}
    </Page>
  )
}

export default Watches