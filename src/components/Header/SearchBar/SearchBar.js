import React from 'react'

import { TextField, IconButton } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './SearchBar.css'

const SearchBar = () => {

  return (
    <div className="searchBar">
      <TextField placeholder="Search item..." className="searchBar-text" />
      <IconButton>
        <FontAwesomeIcon icon={faSearch} />
      </IconButton>
    </div>
  )
}

export default SearchBar