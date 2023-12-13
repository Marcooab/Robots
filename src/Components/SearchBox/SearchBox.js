import React from 'react'
import "./SearchBox.css"

function SearchBox({searchfield, searchChange}) {
  return (
    <div className="pd2 ">
      <input className="pa3 ba b--green bg-lightest-blue" type="search" 
      placeholder='search for Robots'
      onChange={searchChange} />
    </div>
  )
}

export default SearchBox