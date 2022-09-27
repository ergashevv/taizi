import img1 from '../../assets/images/ab1.svg'
import img2 from '../../assets/images/ab2.svg'
import img3 from '../../assets/images/ab3.svg'
import img4 from '../../assets/images/ab4.svg'
import './main.scss'
const About = () => {
    const data = [
        {
            image: img1,
            title: "HOME PICKUP",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore "
        },
        {
            image: img2,
            title: "FAST BOOKING",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore "
        },
        {
            image: img3,
            title: "BONUSES FOR RIDES",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore "
        },
        {
            image: img4,
            title: "GPS SEARCHING",
            text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore "
        }
    ]
    return (
        <>
            {data.map((item, key) => (
                <div key={key} className="about-card" >
                    <div className="img">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="titles ms-5">
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default About