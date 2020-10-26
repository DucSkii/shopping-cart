import React from 'react'

import { getWatches } from '../../data/watches'

import Page from '../Page/Page'
import Items from '../Items/Items'

const Watches = ({ gender }) => {

  return (
    <Page className='watches' title="Watches" gender={gender}>

      {getWatches().map((watch, index) => {
        return <Items key={index} name={watch.name} cost={watch.cost} image={watch.image.url} />
      })}

      {/* <Items name="Rolex Yacht-Master 42 Watch" cost="£10000" image="https://content.rolex.com/dam/2020/upright-bba/m226659-0002.png?impolicy=v6-upright" />
      <Items name="Rolex Yacht-Master 42 Watch" cost="£10000" image="https://content.rolex.com/dam/2020/upright-bba/m226659-0002.png?impolicy=v6-upright" />
      <Items name="Rolex Yacht-Master 42 Watch" cost="£10000" image="https://content.rolex.com/dam/2020/upright-bba/m226659-0002.png?impolicy=v6-upright" />
      <Items name="Rolex Yacht-Master 42 Watch" cost="£10000" image="https://content.rolex.com/dam/2020/upright-bba/m226659-0002.png?impolicy=v6-upright" />
      <Items name="Rolex Yacht-Master 42 Watch" cost="£10000" image="https://content.rolex.com/dam/2020/upright-bba/m226659-0002.png?impolicy=v6-upright" />
      <Items name="Rolex Yacht-Master 42 Watch" cost="£10000" image="https://content.rolex.com/dam/2020/upright-bba/m226659-0002.png?impolicy=v6-upright" />
      <Items name="Rolex Yacht-Master 42 Watch" cost="£10000" image="https://content.rolex.com/dam/2020/upright-bba/m226659-0002.png?impolicy=v6-upright" />
      <Items name="Rolex Yacht-Master 42 Watch" cost="£10000" image="https://content.rolex.com/dam/2020/upright-bba/m226659-0002.png?impolicy=v6-upright" /> */}
    </Page>
  )
}

export default Watches