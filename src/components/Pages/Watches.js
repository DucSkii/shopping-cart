import React from 'react'

import { getWatches } from '../../data/watches'

import Page from '../Page/Page'
import Items from '../Items/Items'

const Watches = ({ gender }) => {

  return (
    <Page className='watches' title="Watches" gender={gender}>
      {getWatches().map((watch, index) => {
        return <Items
          key={index}
          name={watch.name}
          cost={watch.cost}
          image={watch.image.url}
          colour={watch.image.color.join(', ').toUpperCase()}
          desc1={watch.description1}
          desc2={watch.description2}
          desc3={watch.description3}
        />
      })}
    </Page>
  )
}

export default Watches