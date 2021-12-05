import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { Waypoint } from 'react-waypoint'

const Texts = () => {

    const [toggleWaypoint, setToggleWaypoint] = useState(false)
    const handleWaypoint = () => { setToggleWaypoint(true) }

    const reveal = useSpring({
        opacity: toggleWaypoint ? 1 : 0, 
        y: toggleWaypoint ? 0 : -60, 
        transitionProperty: 'opacity, transform',
        transitionDuration: '1.5s',
        transitionDelay: '.2s',
    })

    return(
        <Waypoint onEnter={handleWaypoint} >

            <animated.div 
            style={reveal}
            className="home__texts" > 

                <h1 className="home__title">Les plantes vous rendront<br/>la vie meilleure</h1>
                <p className="home__description">
                    Créez un design de plante incroyable pour votre bureau ou vos appartements.
                    Ajoutez de la fraîcheur à vos nouvelles idées.
                </p>
                <a href="#about" className="button button--flex">Explorer <i className="ri-arrow-right-down-line button__icon"></i></a>

            </animated.div>
        
        </Waypoint>
    )
}

export default Texts
