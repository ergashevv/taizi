import './main.scss'
import Clients1 from '../../assets/images/women.png'
import Clients2 from '../../assets/images/women2.png'
import Clients3 from '../../assets/images/women3.png'
import { useState } from 'react'

const Clients = () => {
    const data = [
        {
            image: Clients1,
            name: "HOME PICKUP",
            about: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ",
            job: "BUSINESS MAN"
        },
        {
            image: Clients2,
            name: "JAMES VFAT",
            about: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ",
            job: "BUSINESS MAN"
        },
        {
            image: Clients3,
            name: "JAMES VFAT",
            about: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ",
            job: "BUSINESS MAN"
        },
        {
            image: Clients3,
            name: "HOME PICKUP",
            about: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ",
            job: "BUSINESS MAN"
        },
        {
            image: Clients1,
            name: "JAMES VFAT",
            about: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ",
            job: "BUSINESS MAN"
        },
        {
            image: Clients2,
            name: "JAMES VFAT",
            about: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ",
            job: "BUSINESS MAN"
        }
    ]
    console.log(data);
    const [count, setCount] = useState(3)
    const [show, setShow] = useState(false)
    const fuckingHandler = () => {
        setCount(count + 3)
        setShow(!show)
        if (show) {
            setCount(count - 3)
        }
    }
    return (
        <>
            <div className="clients">
                <div className="title">
                    <h2>HAPPY CLIENTS</h2>
                    <h3>TESTIMONIALS</h3>
                </div>
                <div className="clients-cards load-anim">
                    {
                        data.slice(0, count).map((item, key) => (
                            <>
                                <div key={key} className={show ? "clients-card active" : "clients-card"}>
                                    <p className='mb-3'>{item.about}</p>
                                    <div className='d-flex'>
                                        <img src={item.image} alt="" />
                                        <div className='ms-4'>
                                            <h3>{item.name}</h3>
                                            <h4>{item.job}</h4>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                </div>
                <button onClick={fuckingHandler}> {show ? "HIDE" : "VIEW MORE"} </button>
            </div>
        </>
    )
}
export default Clients