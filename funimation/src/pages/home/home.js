import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../.././components/shared/header/header";
import Card from "../.././components/shared/card/card";

const Home = () => {
  const [animes, setAnimes] = useState([]);
  const [montado, setMontado] = useState(false);

  const getAnime = async () => {
    await axios.get("/plant/findMany").then((response) => {
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
      <div className="cards_home">
        {animes.map((item) => (
          <Card image={item.imageUrl} name={item.commonName} />
        ))}
      </div>
    </div>
  );
};

export default Home;
