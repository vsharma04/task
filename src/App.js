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