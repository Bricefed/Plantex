import React from "react"
import imgCard1 from './card1.png'
import imgCard2 from './card2.png'
import imgCard3 from './card3.png'
import imgCard4 from './card4.png'

const CreditCards = () => {
    return(
        <div className="footer__content">
            <h3 className="footer__title">Nous acceptons toutes les cartes de crédit</h3>

            <div className="footer__cards">
                <img src={imgCard1} alt="Carte de crédit" className="footer__card" />
                <img src={imgCard2} alt="Carte de crédit" className="footer__card" />
                <img src={imgCard3} alt="Carte de crédit" className="footer__card" />
                <img src={imgCard4} alt="Carte de crédit" className="footer__card" />
            </div>
        </div>
    )
}

export default CreditCards