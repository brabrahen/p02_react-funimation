import "./login.css";
import Header from "../.././components/shared/header/header";
import { useState } from "react";
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const hSubmit = event => {
      event.preventDefault();
      
      const login = {
          email: email,
          password: senha
      }

      axios.post('/auth/login', login)
      .then(response => {
        const token = response.data.token;
        localStorage.setItem('token', token)
      })
  }

  return (
    <div className="login">
      <Header />
      <h2 className="login_title">Login</h2>
      <form className="longi_form" onSubmit={hSubmit}>
        <input
          type="email"
          placeholder="Digite seu email"
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          required
          onChange={(event) => setSenha(event.target.value)}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
