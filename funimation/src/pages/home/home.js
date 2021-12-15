import Header from '../.././components/shared/header/header';
import Card from '../.././components/shared/card/card';

const Home = () => {
    return(
        <div>
            <Header />
            <div className='cards_home'>
                <Card 
                image="https://p2.trrsf.com/image/fget/cf/1200/675/middle/images.terra.com/2021/09/10/demon-slayer-capa.png"
                name="Demon Slayer"
                
                />
            </div>
        </div>
    )
}

export default Home