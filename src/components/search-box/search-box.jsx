import React from 'react'

import './search-box.css'

const SearchBox = ({placeholder,hanldeChange,value}) => (
  <input 
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={hanldeChange}
    value={value}
  />
)

export default SearchBox