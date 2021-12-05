import InputEmail from '../../Inputs/InputEmail'
import InputText from '../../Inputs/InputText'
import InputArea from '../../Inputs/InputArea'
import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { Waypoint } from 'react-waypoint'

const Form = () => {

    const [toggleWaypoint, setToggleWaypoint] = useState(false)
    const handleWaypoint = () => { setToggleWaypoint(true) }

    const reveal = useSpring({
        opacity: toggleWaypoint ? 1 : 0, 
        x: toggleWaypoint ? 0 : 60, 
        transitionProperty: 'opacity, transform',
        transitionDuration: '.5s',
    })

    return(
        <Waypoint onEnter={handleWaypoint} bottomOffset="20%" >

            <animated.form 
            style={reveal}
            action="#" 
            className="contact__form" >

                <div className="contact__inputs">
                    <InputEmail id="email" label="Email" />
                    <InputText id="object" label="Objet" />
                    <InputArea id="message" label="Message" />
                </div>

                <button className="button button--flex">Envoyer le message <i className="ri-arrow-right-up-line button__icon"></i></button>
            
            </animated.form>

        </Waypoint>
    )
}

export default Form