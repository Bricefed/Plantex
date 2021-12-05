import React from "react"

const Content = (props) => {
    return(
        <>
            <div className="product__circle"></div>

            <img src={props.img} alt={props.title} className="product__img" />

            <h3 className="product__title">{props.title}</h3>
            <span className="product__price">{props.price} €</span>

            <button className="button--flex product__button">
                <i className="ri-shopping-bag-line"></i>
            </button>
        </>
    )
}

export default Content