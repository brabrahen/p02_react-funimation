import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../.././components/shared/header/header';
import Card from '../.././components/shared/card/card';

const Home = () => {
    const [animes, setAnimes] = useState([]);
    const [montado, setMontado] = useState(false);

    const getAnime = async () => {
        await axios.get('/plant/findMany')
        .then(response => {
            console.log(response.data)
        })
    }


    return(
        <div>
            <Header />
            <div className='cards_home'>
                <Card 
                // image="https://p2.trrsf.com/image/fget/cf/1200/675/middle/images.terra.com/2021/09/10/demon-slayer-capa.png"
                // imageAlt="DS"
                // name="Demon Slayer"
                
                />
            </div>
        </div>
    )
}

export default Home