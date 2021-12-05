import React, {useState, useRef, useEffect}  from "react"

const Items = (props) => {

    const [toggle, setToggle] = useState(false)
    const [height, setHeight] = useState()

    const handleTogg = () => setToggle(!toggle)

    const refHeight = useRef()

    useEffect(() => {
        setHeight(`${refHeight.current.scrollHeight}`)
    }, [])


    return(
        <div className={!toggle ? 'questions__item' : 'questions__item accordion-open'}
        onClick={handleTogg} >
            <header className="questions__header">
                <i className="ri-add-line"></i>
                <h3 className="questions__item-title">{props.h3title}</h3>
            </header>

            <div className="questions__content"
            ref={refHeight} 
            style={{height: !toggle ? '0' : `${height}px`}} >
                <p className="questions__description">{props.description}</p>
            </div>
        </div>
    )
}

export default Items