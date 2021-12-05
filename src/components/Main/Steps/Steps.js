import Step from "./Step"

const Steps = () => {

    return(
        <section className="steps section container">
            <div className="steps__bg">
                <h2 className="section__title-center steps__title">Étapes pour bien<br/>démarrer vos plantes</h2>

                <div className="steps__container grid">
                    <Step />
                </div>
                
            </div>
        </section>
    )
}

export default Steps