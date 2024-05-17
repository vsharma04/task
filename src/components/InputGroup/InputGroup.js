import React from 'react'
import style from './InputGroup.module.css'
import SearchIcon from '../../svgIcons/SearchIcon'

const InputGroup = ({ toggle, setDomain, checkDomainAvailability }) => {
  return (
    <div className={`${style.container} ${toggle ? style.darkMode : style.lightMode}`}>
      <SearchIcon />
      <input type="text" placeholder='Search Domain...' onChange={(e) => setDomain(e.target.value)} />
      <button onClick={checkDomainAvailability}>Search</button>
    </div>
  )
}

export default InputGroup
