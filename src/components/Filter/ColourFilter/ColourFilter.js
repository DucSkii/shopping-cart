import React, {useEffect} from 'react'
import Dropdown from '../../../utils/Tools/Dropdown/Dropdown.js'
import {useStateValue} from '../../../context/StateContext'

const ColourFilter = ({ coloursList, selection, setSelection }) => {

  const [{mapColor}, dispatch ] = useStateValue()
  
  const getSelection = () => {
    return selection.map(color => {
      return color.value
    })
  }
  useEffect(() => {
    dispatch({type: 'CHANGE_COLOR', selection: getSelection()})
  }, [selection])
  
  return (
    <div className="colourFilter">
      <Dropdown title="Colour" items={coloursList} multiSelect
        selection={selection}
        setSelection={setSelection}
      />
    </div>
  )
}

export default ColourFilter