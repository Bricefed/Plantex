import React from "react"

const InputArea = (props) => {
    return(
        <div className="contact__content contact__area">
            <textarea name={props.id} placeholder=" " className="contact__input" id={props.id}></textarea>
            <label htmlFor={props.id} className="contact__label">{props.label}</label>
        </div>
    )
}

export default InputArea