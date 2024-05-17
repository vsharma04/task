import React from 'react'
import style from './InputGroup.module.css'
import SearchIcon from '../../svgIcons/SearchIcon'
import Loader from '../Loader/Loader'

const InputGroup = ({ toggle, setDomain, checkDomainAvailability, loader }) => {
  return (
    <div className={`${style.container} ${toggle ? style.darkMode : style.lightMode}`}>
      <SearchIcon />
      <input type="text" placeholder='Search Domain...' onChange={(e) => setDomain(e.target.value)} />
      {loader ?<Loader /> : <button onClick={checkDomainAvailability}>Search</button>}
    </div>
  )
}

export default InputGroup
