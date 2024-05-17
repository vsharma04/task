import React from 'react'
import style from './Navbar.module.css'
import LightModeIcon from '../../svgIcons/LightModeIcon'
import DarkModeIcon from '../../svgIcons/DarkModeIcon'

const Navbar = ({ toggle, setToggle }) => {

    const handleClick = () => {
        setToggle(!toggle)
    }

    return (
        <div className={`${style.container} ${toggle ? style.darkMode : style.lightMode}`}>
            <div className={style.logo}>
                <h3>Domain</h3>
                <span>Search</span>
            </div>
            <div className={style.links}>
                <span>Home</span>
                <span>Services</span>
                <span>Products</span>
                <div onClick={handleClick}>
                    {toggle ? <LightModeIcon /> : <DarkModeIcon />}
                </div>

            </div>
        </div>
    )
}

export default Navbar
