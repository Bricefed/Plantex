import Article from "./Article"

const Product = () => {

    return(
        <section className="product section container" id="product">
            <h2 className="section__title-center">Découvrez nos<br/>produits</h2>
            <p className="product__description">Voici quelques plantes sélectionnées de notre salle d'exposition, toutes sont en excellente forme et ont une longue durée de vie. Achetez et profitez de la meilleure qualité</p>

            <div className="product__container grid">
                <Article />
            </div>
        </section>
    )
}

export default Product