import Header from "../.././components/shared/header/header";
import './cadastro.css'

const Cadastro = ()=> {
    return(
        <div>
        <Header />
        <div className="cadastro">
          <h2 className="cadastro_title">Cadastro</h2>
          <form className="cadastro_form">
          <input
              className="cadastro_email"
              type="email"
              placeholder="Digite seu email"
              required
            />
            <input
              className="cadastro_email"
              type="text"
              placeholder="Nome completo"
              required
            />
            <input
              className="cadastro_senha"
              type="password"
              placeholder="Digite uma senha"
              required
            />
            <input
              className="cadastro_senha"
              type="password"
              placeholder="Confirme a senha"
              required
            />
            <input className="cadastro_login" type="submit" value="Cadastrar" />
          </form>
        </div>
      </div>
    )
}

export default Cadastro;