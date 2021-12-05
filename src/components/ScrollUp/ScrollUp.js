import { useState, useEffect } from "react"

const ScrollUp = () => {

    const [scrollY, setScrollY] = useState(0)
    const valueScroll = () => setScrollY(window.pageYOffset)

    useEffect(() => {
        window.addEventListener("scroll", valueScroll)
        return () => window.removeEventListener("scroll", valueScroll)
    })

    return(
        <a href="#home" className={scrollY <= 200 ? 'scrollup' : 'scrollup show-scroll'}>
            <i className="ri-arrow-up-fill scrollup__icon"></i>
        </a>
    )
}

export default ScrollUp