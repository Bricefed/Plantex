import React, {useState} from "react"

const Details = () => {

    const [details] = useState([
        {'description': 'Nous livrons toujours à temps.'},
        {'description': 'Nous vous donnons des guides pour protéger et prendre soin de vos plantes.'},
        {'description': 'Nous sommes disponibles pour un contrôle après vente.'},
        {'description': '100% satisfait ou remboursé.'},
    ])

    return(
        <div className="about__details">

            {details.map((detail, index) => {
                return (
                    <p className="about__details-description" key={index}>
                        <i className="ri-checkbox-fill about__details-icon"></i>
                        {detail.description}
                    </p>
                )
            })}

        </div>
    )
}

export default Details