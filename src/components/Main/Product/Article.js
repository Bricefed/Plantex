import Content from './Content'
import { dataProducts } from "../../../data/products"
import { useState } from "react"
import { useSpring, animated } from 'react-spring'
import { Waypoint } from 'react-waypoint'

const Article = (props) => {

    const [plants] = useState(dataProducts)

    const [toggleWaypoint, setToggleWaypoint] = useState(false)
    const handleWaypoint = () => { setToggleWaypoint(true) }

    const reveal = useSpring({
        opacity: toggleWaypoint ? 1 : 0, 
        y: toggleWaypoint ? 0 : -60, 
        transitionProperty: 'opacity, transform',
        transitionDuration: '.5s',
    })

    return(
        plants.map((plant, i) => {
            return (
                <Waypoint key={i} onEnter={handleWaypoint} bottomOffset="20%" >

                    <animated.article 
                    style={reveal} 
                    className="product__card" >

                        <Content img={plant.img} title={plant.title} price={plant.price} />
                    
                    </animated.article>

                </Waypoint>
            )
        })
    )
}

export default Article