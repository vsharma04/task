import React, { useState } from 'react'
import style from './Hero.module.css'
import InputGroup from '../InputGroup/InputGroup'
import Suggestions from '../Suggestions/Suggestions'
import axios from 'axios'

const HeroPage = ({ toggle }) => {

  const [domain, setDomain] = useState('');
  const [results, setResults] = useState([]);
  const [loader, setLoader] = useState(false);

  const checkDomainAvailability = async () => {
    setLoader(true)
    const extensions = ['.com', '.in', '.io'];
    const results = [];

    for (let ext of extensions) {
      const fullDomain = domain + ext;
      try {
        const response = await axios.get(`https://dns.google/resolve?name=${fullDomain}`);
        if (response.data.Status === 0) {
          results.push({ domain: fullDomain, available: true });
        } else {
          results.push({ domain: fullDomain, available: false });
        }
      } catch (error) {
        results.push({ domain: fullDomain, available: false });
      }
    }

    setResults(results);
    setLoader(false)
  };


  return (
    <div className={style.container}>
      <InputGroup
        setDomain={setDomain}
        toggle={toggle}
        checkDomainAvailability={checkDomainAvailability}
        loader={loader} />
      <Suggestions
        results={results}
        toggle={toggle} />
    </div>
  )
}

export default HeroPage
