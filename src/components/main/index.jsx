import CardIcon from '../../assets/images/car.png'
import './main.scss'
const MainSection = () => {
    return (
        <>
            <div className="main">
                <img src={CardIcon} alt="" />
                <div className='d-flex'>
                    <div className='empty'></div>
                    <div className="title">
                        <h2>BOOK A RIDE</h2>
                        <h4>TaiZi go sort you with the best ride experience</h4>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MainSection