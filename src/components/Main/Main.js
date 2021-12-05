import React from "react"
import Home from "./Home/Home"
import About from "./About/About"
import Steps from "./Steps/Steps"
import Product from "./Product/Product"
import Questions from "./Questions/Questions"
import Contact from "./Contact/Contact"

const Main = () => {

    return(
        <main className="main">
            <Home />
            <About />
            <Steps />
            <Product />
            <Questions />
            <Contact />
        </main>
    )
}

export default Main