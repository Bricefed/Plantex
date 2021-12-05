import imgAbout from '../../../assets/about/about.png'
import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { Waypoint } from 'react-waypoint'


const Img = () => {

    const [toggleWaypoint, setToggleWaypoint] = useState(false)
    const handleWaypoint = () => { setToggleWaypoint(true) }

    const reveal = useSpring({
        opacity: toggleWaypoint ? 1 : 0, 
        x: toggleWaypoint ? 0 : -60, 
        transitionProperty: 'opacity, transform',
        transitionDuration: '.5s',
    })

    return(
        <Waypoint onEnter={handleWaypoint} bottomOffset="25%" >

            <animated.img 
            style={reveal}
            src={imgAbout}
            alt="Plante"
            className="about__img" />
        
        </Waypoint>
    )
}

export default Img