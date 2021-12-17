import './card.css';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const navigate = useNavigate();

    const detalhesAnime = () => {
        navigate('/detanime', { state: props.id })
    }

    return(
        <div className="card" onClick={detalhesAnime}>
            <img className="card_image" src={props.image} alt={props.imageAlt} />
            <span>{props.name}</span>
        </div>
    )
}

export default Card