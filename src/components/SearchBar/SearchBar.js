import React from 'react'

import { TextField, IconButton } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './SearchBar.css'

const SearchBar = () => {

  return (
    <div>
      <TextField placeholder="Search item..." />
      <IconButton>
        <FontAwesomeIcon icon={faSearch} />
      </IconButton>
    </div>
  )
}

export default SearchBar