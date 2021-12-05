import React, {useContext, useState} from "react"
import {ThemeContext} from '../../../context/ThemeContext'

const Menu = () => {

    
    const [toggle, setToggle] = useState(false) 
    const [items] = useState([
        {'name': 'Accueil',     'link': '#home'},
        {'name': 'À Propos',    'link': '#about'},
        {'name': 'Produits',    'link': '#product'},
        {'name': 'FAQs',        'link': '#faqs'},
        {'name': 'Contact',     'link': '#contact'},
    ])
    
    const handleToggle = () => { setToggle(!toggle) }
    const {toggleTheme, theme} = useContext(ThemeContext)

    return(
        <>
            <div className={ !toggle ? 'nav__menu' : 'nav__menu show-menu' }>
                <ul className="nav__list">

                    {items.map((item, index) => {
                        return (
                            <li className="nav__item" key={index}>
                                <a href={item.link} className="nav__link" onClick={handleToggle}>
                                    {item.name}
                                </a>
                            </li>
                        )
                    })}

                </ul>
            </div>

            <div className="nav__btns">
                <i 
                className={ !theme ? 'ri-moon-line change-theme' : 'ri-sun-line change-theme' } 
                id="theme-button"
                onClick={toggleTheme}></i>
                <div 
                className={ !toggle ? 'nav__toggle' : 'nav__toggle open-menu' } 
                onClick={handleToggle}>
                    <span></span>
                </div>
            </div>

        </>
    )
}

export default Menu