import "./account.css";
import Header from "../../shared/header/header";

const Account = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <section className="perfil">
        <div className="foto_perfil">
          <span>FOTO DE PERFIL (imagem apenas cobriria a capa, estilo png)</span>
          <span>Abaixo a lista de favs</span>
        </div>
        <div className="capa_perfil">
          <span>CAPA PERFIL (ocupa todo espaço em branco)</span>
        </div>
        
      </section>
    </div>
  );
};

export default Account;
