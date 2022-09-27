import CardCar from "../components/card"
import FormHome from "../components/form"
import Header from "../components/header"
import MainSection from "../components/main"
import Car1 from '../assets/images/card1.png'
import Car2 from '../assets/images/car2.png'
import Car3 from '../assets/images/car3.png'
import './main.scss'
import About from "../components/about"
import Download from "../components/download"
import Clients from "../components/clients"
import Contact from "../components/contact"

const Home = () => {
    return (
        <>
            <div className="ad-section">
                <div className="overlay"></div>
                <div id="home" className="container">
                    <Header />
                    <MainSection />
                </div>
            </div>
            <div id="features" className="form-section">
                <FormHome />
            </div>
            <div id="about" className="cards-section">
                <h2>OUR TARIIFFS</h2>
                <div className="container inner">
                    <CardCar img={Car1} title={"ECONOMY CLASS"} text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore "} cost={"Ghc 9800 sum"} />
                    <CardCar img={Car2} title={"STANDARD CLASS"} text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore "} cost={"12 500 sum"} />
                    <CardCar img={Car1} title={"BUSINESS CLASS"} text={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore "} cost={"16 500 sum"} />
                </div>
            </div>
            <div id="blog" className="about">
                <h2>WE DO MORE THAN YOU WISH</h2>
                <div className="about-section container mt-5">
                    <About />
                </div>
            </div>
            <div className="download-section container py-5">
                <Download />
            </div>
            <div className="clients-section load-anim ">
                <div className="container">
                    <Clients />
                </div>
            </div>
            <div id="contacts" className="contact-section">
                <Contact />
            </div>
        </>
    )
}
export default Home

