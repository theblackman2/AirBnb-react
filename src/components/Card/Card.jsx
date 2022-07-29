import './Card.css'
import CardImg from './../../assets/cards_img/image 12.png'
import Star from './../../assets/Star 1.png'

function Card() {
  return (
    <div className="card">
      <div className="card-img">
        <img src={CardImg} alt="Card image" />
        <div className="sold">Sold out</div>
      </div>
      <div className="card-body">
        <div className="rates">
          <img src={Star} alt="Star image" />
        </div>
      </div>
    </div>
  )
}

export default Card