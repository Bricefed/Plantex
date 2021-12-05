import React from "react"

const Info = (props) => {

    const icon = `ri-${props.iconName}-line contact__icon`

    return(
        <div className="contact__information">
            <h3 className="contact__subtitle">{props.h3title}</h3>
            <span className="contact__description"><i className={icon}></i> {props.content}</span>
        </div>
    )
}

export default Info