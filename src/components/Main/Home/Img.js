import imgHome from '../../../assets/home/home.png'
import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { Waypoint } from 'react-waypoint'

const Img = () => {

    const [toggleWaypoint, setToggleWaypoint] = useState(false)
    const handleWaypoint = () => { setToggleWaypoint(true) }

    const reveal = useSpring({
        opacity: toggleWaypoint ? 1 : 0, 
        y: toggleWaypoint ? 0 : -60, 
        transitionProperty: 'opacity, transform',
        transitionDuration: '1.5s',
        transitionDelay: '.4s',
    })

    return(
        <Waypoint onEnter={handleWaypoint} >

            <animated.img 
            style={reveal} 
            src={imgHome} 
            alt="Plante" 
            className="home__img" /> 

        </Waypoint>
    )
}

export default Img