import './anime.css';
import { useState } from 'react'

const Detalhe = () => {
    const [detalhesAnime, setDetalhesAnime] = useState([])

    return(
        <div className='detAnime'>
            <h2>{detalhesAnime.scientificName}</h2>
            <img src={detalhesAnime.imageUrl} alt={detalhesAnime.commonName} />
            <h3>{detalhesAnime.commonName}0</h3>
            <p>{detalhesAnime.descriptio}</p>
        </div>
    )
}