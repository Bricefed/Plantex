import React from "react"

const InputText = (props) => {
    return(
        <div className="contact__content">
            <input type="text" placeholder=" " className="contact__input" id={props.id} />
            <label htmlFor={props.id} className="contact__label">{props.label}</label>
        </div>
    )
}

export default InputText