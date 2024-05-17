import React from 'react'
import style from './Suggestions.module.css'
import Result from './Result'

const Suggestions = ({ toggle, results }) => {
  return (
    <div className={`${style.container} ${toggle ? style.darkMode : style.lightMode}`}>

      {results.map((result, index) => (
        // <div key={index} className={result.available ? 'available' : 'unavailable'}>
        //   {result.domain} is {result.available ? 'available' : 'not available'}
        // </div>
        <Result
          result={result}
          toggle={toggle} />
      ))}


    </div>
  )
}

export default Suggestions
