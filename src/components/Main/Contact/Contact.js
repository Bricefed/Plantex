import React from "react"
import Infos from "./Infos"
import Form from "./Form"

const Contact = () => {

    return(
        <section className="contact section container" id="contact">
            <div className="contact__container grid">
                <Infos />
                <Form />
            </div>
        </section>
    )
}

export default Contact