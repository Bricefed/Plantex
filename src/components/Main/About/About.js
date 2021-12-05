import Img from './Img'
import Texts from "./Texts"

const About = () => {
    return(
        <section className="about section container" id="about">
            <div className="about__container grid">
                <Img />
                <Texts />
            </div>
        </section>

    )
}

export default About