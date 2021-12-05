import React, {useState} from "react"
import Items from "./Items"
import { dataFaqs } from "../../../data/faqs"

const Groups = () => {

    const [faqs] = useState(dataFaqs)
    const middleLength = faqs.length / 2

    return(
        <>
            <div className="questions__group">
                {faqs.slice(0, middleLength).map((question, i) => {
                    return (
                        <Items key={i} h3title={question.title} description={question.description} />
                    )
                })}
            </div>
            <div className="questions__group">
                {faqs.slice(-middleLength).map((question, i) => {
                    return (
                        <Items key={i} h3title={question.title} description={question.description} />
                    )
                })}
            </div>
        </>
    )
}

export default Groups
