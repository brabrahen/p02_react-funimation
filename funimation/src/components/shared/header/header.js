import "./header.css";
import React from "react";
import { GiBeastEye } from "react-icons/gi";

const Nav = () => {
  return (
    <div className="todo">
      <section className="header">
        <div className="txt-header">
          <ul> 
            <a className="nav_header1" href=""><GiBeastEye />Funimation</a>
            <a className="nav_header" href="#">Login</a>
            <a className="nav_header" href="#">Cadastro</a>
            <a className="nav_header" href="#">Minha Conta</a>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Nav;
