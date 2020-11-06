import React, {useEffect} from 'react'
import { useStateValue } from '../../../context/StateContext.js'
import Dropdown from '../../../utils/Tools/Dropdown/Dropdown.js'

const items = [
  {
    id: 1,
    value: 'Price low to high',
  },
  {
    id: 2,
    value: 'Price high to low',
  },
]

const SortBy = ({ selection, setSelection }) => {

  const [{getSort}, dispatch ] = useStateValue()

  const getSelection = (selection) => {
    return selection.map(sort => {
      return sort.value
    })
  }

  useEffect (() => {
    dispatch({type: 'CHANGE_SORT', sort: getSelection(selection)})
  }, [selection])
  
  return (
    <div className="sortBy" >
      <Dropdown title="Sort"
        items={items}
        selection={selection}
        setSelection={setSelection}
      />
    </div >
  )
}

export default SortBy