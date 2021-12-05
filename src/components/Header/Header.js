import { useState, useEffect } from "react"
import {useTrail, animated} from 'react-spring'
import Menu from "./Menu/Menu"
import Logo from "./Menu/Logo"

const Header = () => {

    const [scrollY, setScrollY] = useState(0)
    const valueScroll = () => setScrollY(window.pageYOffset)

    useEffect(() => {
        window.addEventListener("scroll", valueScroll)
        return () => window.removeEventListener("scroll", valueScroll)
    })

    const opacity       = 'opacity .5s'
    const transform     = 'transform .5s'
    const background    = 'background .3s'
    const boxShadow     = 'box-shadow .3s'

    const trail = useTrail(1, {
        from: { 
            opacity: 0, 
            y: -60,
            transition: `${opacity}, ${transform}, ${background}, ${boxShadow}`
        },
        to: { opacity: 1, y: 0 }
    })

    return(
        trail.map((item, i) =>
            <animated.header 
            key={i} 
            style={item} 
            className={scrollY <= 80 ? 'header' : 'header scroll-header'} 
            id="header">

                <nav className="nav container">
                    <Logo />
                    <Menu />
                </nav>

            </animated.header>
        )
    )
}

export default Header