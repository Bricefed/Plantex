import React from "react"

const Newslater = () => {
    return(
        <div className="footer__content">
            <a href="#!" className="logo mb-5"><i className="ri-leaf-line footer__logo--icon"></i> Plantex</a>

            <h3 className="footer__title">Abonnez-vous à notre newsletter pour rester informé</h3>

            <div className="footer__subscribe">
                <input type="email" placeholder="Entrez votre email" id="" className="footer__input" />

                <button className="button button--flex footer__button">
                    S'inscrire <i className="ri-arrow-right-up-line button__icon"></i>
                </button>
            </div>
        </div>
    )
}

export default Newslater