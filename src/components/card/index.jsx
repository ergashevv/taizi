import './main.scss'
const CardCar = ({ img, title, text, cost }) => {
    return (
        <>
            <div className="card-car">
                <img src={img} alt="" />
                <h2>{title}</h2>
                <p>{text}</p>
                <div className="mb-5">
                    <span>{cost}</span>
                </div>
                <button>READ MORE</button>
            </div>

        </>
    )
}
export default CardCar