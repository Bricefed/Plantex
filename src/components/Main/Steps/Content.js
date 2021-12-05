import React from "react"

const Content = (props) => {
    return(
        <>
            <div className="steps__card-number">{props.id}</div>
            <h3 className="steps__card-title">{props.title}</h3>
            <p className="steps__card-description">{props.description}</p>
        </>
    )
}

export default Content