import './anime.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate, Link} from 'react-router-dom';
import axios from 'axios';

const Anime = () => {
    const [detalhesAnime, setDetalhesAnime] = useState([]);

    useEffect(()=>{
        Anime();
    }, [])

    return(
        <div className='detAnime'>
            <h2>{detalhesAnime.scientificName}</h2>
            <img src={detalhesAnime.imageUrl} alt={detalhesAnime.commonName} />
            <h3>{detalhesAnime.commonName}</h3>
            <p>{detalhesAnime.description}</p>
        </div>
    )
}

export default Anime;