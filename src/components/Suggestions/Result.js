import React from 'react'
import style from './Suggestions.module.css'

const Result = ({ toggle, result }) => {
  return (
    <div className={`${style.childContainer} ${toggle ? style.resultDarkMode : ''}`}>
      {result.available
        ? <> ✅ <span> {result.domain} available</span></>
        : <> ❌ <span>{result.domain} is not available</span> </>
      }
    </div>
  )
}

export default Result
