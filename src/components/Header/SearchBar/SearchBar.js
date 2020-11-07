import React, {useEffect, useState} from 'react'

import { TextField, IconButton } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {useStateValue} from '../../../context/StateContext'

import './SearchBar.scss'

const SearchBar = () => {

  const [{searchBar}, dispatch ] = useStateValue()
  const [ text, setText ] = useState('')

  const getText = (e) => {
    return setText(e.target.value)
  }

  useEffect(() => {
    dispatch({type: 'SEARCH_BAR', text: text})
  }, [text])

  return (
    <div className="searchBar">
      <TextField placeholder="Search item..." className="searchBar-text" onChange={(e) => getText(e)} />
      <IconButton>
        <FontAwesomeIcon icon={faSearch} />
      </IconButton>
    </div>
  )
}

export default SearchBar