import Img from "./Img"
import Texts from "./Texts"
import Follow from "./Follow"

const Home = () => {

    return(
        <section className="home" id="home">
                <div className="home__container container grid">
                    <Img />
                    <Texts />
                    <Follow />
                </div>
        </section>
    )
}

export default Home