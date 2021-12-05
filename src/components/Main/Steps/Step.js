import Content from './Content'
import { dataSteps } from "../../../data/steps"
import { useState } from "react"
import { useSpring, animated } from 'react-spring'
import { Waypoint } from 'react-waypoint'


const Step = () => {

    const [steps] = useState(dataSteps)

    const [toggleWaypoint, setToggleWaypoint] = useState(false)
    const handleWaypoint = () => { setToggleWaypoint(true) }

    const reveal = useSpring({
        opacity: toggleWaypoint ? 1 : 0, 
        y: toggleWaypoint ? 0 : -60, 
        transition: 'opacity, transform',
        transitionDuration: '.5s',
    })

    return(
        steps.map((step, i) => {
            return (
                <Waypoint key={i} onEnter={handleWaypoint} bottomOffset="30%" >

                    <animated.div
                    style={reveal} 
                    className="steps__card" >

                        <Content id={step.id} title={step.title} description={step.description} />
                    
                    </animated.div>

                </Waypoint>
            )
        })
    )
}

export default Step