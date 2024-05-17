import { useState } from 'react';
import style from './App.module.css';
import HeroPage from './components/HeroPage/HeroPage';
import Navbar from './components/Navbar/Navbar';

function App() {

  const [toggle, setToggle] = useState(false)

  
  return (
    <div className={`${toggle ? style.darkMode : style.lightMode}`}>
      <Navbar toggle={toggle} setToggle={setToggle} />
      <HeroPage toggle={toggle} />
    </div>
  );
}

export default App;


// src/DomainSearch.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import './DomainSearch.css';

// const App = () => {
//   const [domain, setDomain] = useState('');
//   const [results, setResults] = useState([]);

//   const checkDomainAvailability = async () => {
//     const extensions = ['.com', '.in', '.io'];
//     const results = [];

//     for (let ext of extensions) {
//       const fullDomain = domain + ext;
//       try {
//         const response = await axios.get(`https://dns.google/resolve?name=${fullDomain}`);
//         if (response.data.Status === 0) {
//           results.push({ domain: fullDomain, available: true });
//         } else {
//           results.push({ domain: fullDomain, available: false });
//         }
//       } catch (error) {
//         results.push({ domain: fullDomain, available: false });
//       }
//     }

//     setResults(results);
//   };

//   return (
//     <div className="domain-search-container">
//       <h1>Domain Search</h1>
//       <input
//         type="text"
//         value={domain}
//         onChange={(e) => setDomain(e.target.value)}
//         placeholder="Enter domain name"
//       />
//       <button onClick={checkDomainAvailability}>Search</button>
//       <div className="results">
//         {results.map((result, index) => (
//           <div key={index} className={result.available ? 'available' : 'unavailable'}>
//             {result.domain} is {result.available ? 'available' : 'not available'}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;

