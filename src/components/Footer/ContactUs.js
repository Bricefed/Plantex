import React from "react"

const ContactUs = () => {
    return(
        <div className="footer__content">
            <h3 className="footer__title">Nous contacter</h3>

            <ul className="footer__data">
                <li className="footer__information">01 23 45 67 89</li>
                <div className="footer__social">
                    <a href="#!" className="footer__social-link"><i className="ri-facebook-fill"></i></a>
                    <a href="#!" className="footer__social-link"><i className="ri-instagram-line"></i></a>
                    <a href="#!" className="footer__social-link"><i className="ri-twitter-fill"></i></a>
                </div>
            </ul>
        </div>
    )
}

export default ContactUs