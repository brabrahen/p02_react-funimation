import './card.css';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const navigate = useNavigate();

    const detalhesAnime = () => {
        navigate('/detanime', { state: props.id })
    }

    return(
        <div className="card" onClick={detalhesAnime}>
            <img className="card_image" src={props.cover} alt={props.title} />
            <span>{props.title}</span>
        </div>
    )
}

export default Card