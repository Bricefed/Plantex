import Groups from "./Groups"
import { useState } from "react"
import { useSpring, animated } from 'react-spring'
import { Waypoint } from 'react-waypoint'

const Questions = () => {

    const [toggleWaypoint, setToggleWaypoint] = useState(false)
    const handleWaypoint = () => { setToggleWaypoint(true) }

    const reveal = useSpring({
        opacity: toggleWaypoint ? 1 : 0, 
        y: toggleWaypoint ? 0 : -60, 
        transitionProperty: 'opacity, transform',
        transitionDuration: '.5s',
    })

    return(
        <Waypoint onEnter={handleWaypoint} bottomOffset="20%" >

            <animated.section
            style={reveal}
            className="questions section"
            id="faqs">

                <h2 className="section__title-center questions__title container">Certaines questions courantes ont souvent été posées</h2>
                <div className="questions__container container grid">
                    <Groups  />
                </div>

            </animated.section>

        </Waypoint>
    )
}

export default Questions