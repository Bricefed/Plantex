import Details from "./Details"
import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { Waypoint } from 'react-waypoint'

const Texts = () => {

    const [toggleWaypoint, setToggleWaypoint] = useState(false)
    const handleWaypoint = () => { setToggleWaypoint(true) }

    const reveal = useSpring({
        opacity: toggleWaypoint ? 1 : 0, 
        x: toggleWaypoint ? 0 : 60, 
        transitionProperty: 'opacity, transform',
        transitionDuration: '.5s',
    })

    return(
        <Waypoint onEnter={handleWaypoint} bottomOffset="25%" >

            <animated.div 
            style={reveal} 
            className="about__data">

                <h2 className="section__title about__title">Qui nous sommes vraiment et pourquoi nous choisir</h2>
                <p className="about__description">Nous avons plus de 4000 avis impartiaux. Notre processus d'usine et notre service de livraison et remercier à chaque fois.</p>
                <Details />
                <a href="#!" className="button button--link button--flex">Acheter maintenant <i className="ri-arrow-right-down-line button__icon"></i></a>
            
            </animated.div>
        
        </Waypoint>
    )
}

export default Texts