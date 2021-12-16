import './card.css';
import { useNavigate } from 'react-router-dom'

const Card = (props) => {
    return(
        <div className="card">
            <img src={props.image} alt={props.imageAlt} />
            <span>{props.name}</span>
        </div>
    )
}

export default Card