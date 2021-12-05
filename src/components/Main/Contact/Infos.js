import Info from "./Info"
import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { Waypoint } from 'react-waypoint'

const Infos = () => {

    const [toggleWaypoint, setToggleWaypoint] = useState(false)
    const handleWaypoint = () => { setToggleWaypoint(true) }

    const reveal = useSpring({
        opacity: toggleWaypoint ? 1 : 0, 
        x: toggleWaypoint ? 0 : -60, 
        transitionProperty: 'opacity, transform',
        transitionDuration: '.5s',
    })
    
    return(
        <Waypoint onEnter={handleWaypoint} bottomOffset="20%" >
        
            <animated.div 
            style={reveal} 
            className="contact__box" >

                <h2 className="section__title">Contactez-nous aujourd'hui<br/>via les informations fournies</h2>
                <div className="contact__data">
                    
                    <Info 
                    h3title="Appelez-nous pour une assistance instantanée"
                    iconName="phone" 
                    content="01 23 45 67 89" />
                    
                    <Info 
                    h3title="Écrivez-nous par mail"
                    iconName="mail"
                    content="plantex@fake.com" />

                </div>

            </animated.div>

        </Waypoint>
    )
}

export default Infos