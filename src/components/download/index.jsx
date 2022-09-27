import PlayMarket from '../../assets/images/playmarket.png'
import AppStore from '../../assets/images/appstore.png'
import Phone from '../../assets/images/phone.png'
import './main.scss'
const Download = () => {
    return (
        <>
            <div className="download">
                <div className="title">
                    <h2>DOWNLOAD TaiZi</h2>
                    <h3>BEST CAB SERVICE</h3>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="product">
                        <div className="desc">
                            <h4>Download TaiZi app now!
                                Get Exciting New Offers</h4>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore </p>
                            <div className="store">
                                <img src={PlayMarket} alt="" />
                                <img className='ms-3' src={AppStore} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="product-image">
                        <img src={Phone} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Download