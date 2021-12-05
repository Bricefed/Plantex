import { useState } from 'react'
import { useSpring, animated}  from 'react-spring'
import { Waypoint } from 'react-waypoint'

const Follow = () => {

    const [toggleWaypoint, setToggleWaypoint] = useState(false)
    const handleWaypoint = () => { setToggleWaypoint(true) }

    const reveal = useSpring({
        opacity: toggleWaypoint ? 1 : 0, 
        y: toggleWaypoint ? 0 : -60, 
        transitionProperty: 'opacity, transform',
        transitionDuration: '1.5s',
        transitionDelay: '.6s',
    })

    return(
        <Waypoint onEnter={handleWaypoint} >

            <animated.div 
            style={reveal}
            className="home__social" >

                <span className="home__social-follow">Suivez-nous</span>

                <div className="home__social-links">
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="home__social-link"><i className="ri-facebook-fill"></i></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="home__social-link"><i className="ri-instagram-line"></i></a>
                    <a href="https://www.twitter.com/" target="_blank" rel="noreferrer" className="home__social-link"><i className="ri-twitter-fill"></i></a>
                </div>

            </animated.div>

        </Waypoint>
    )
}

export default Follow
