import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../shared/header/header";
import Card from "../../shared/card/card";

const Home = () => {
  const [animes, setAnimes] = useState([]);
  const [montado, setMontado] = useState(false);

  const getAnime = async () => {
    await axios.get("/movie/findMany").then((response) => {
      if (montado) {
        setAnimes(response.data);
      }
    });
  };

  useEffect(() => {
    setMontado(true);
    getAnime();
  }, [montado]);

  return (
    <div>
      <Header />
      <div >
        {animes.map((item) => (
          <Card className="cards_home" image={item.image} name={item.name} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
