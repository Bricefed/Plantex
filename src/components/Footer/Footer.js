import Newslater from "./Newslater"
import Adress from "./Adress"
import ContactUs from "./ContactUs"
import CreditCards from "./CreditCards"
import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { Waypoint } from 'react-waypoint'

const Footer = () => {

    const [toggleWaypoint, setToggleWaypoint] = useState(false)
    const handleWaypoint = () => { setToggleWaypoint(true) }

    const reveal = useSpring({
        opacity: toggleWaypoint ? 1 : 0, 
        y: toggleWaypoint ? 0 : 60, 
        transitionProperty: 'opacity, transform',
        transitionDuration: '.5s',
    })

    return(
        <Waypoint onEnter={handleWaypoint} bottomOffset="15%" >

            <animated.footer 
            style={reveal}
            className="footer section" >

                <div className="footer__container container grid">
                    <Newslater />
                    <Adress />
                    <ContactUs />
                    <CreditCards />
                </div>

                <p className="footer__copyright">&#169; BFedou. Tous droits réservés</p>

            </animated.footer>
        
        </Waypoint>
    )
}

export default Footer