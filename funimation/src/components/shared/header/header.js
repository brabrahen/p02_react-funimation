import "./header.css";
import React from "react";
import { GiBeastEye } from "react-icons/gi";
import { Link } from 'react-router-dom'





const Nav = () => {
  return (
    <div className="todo">
      <section className="header">
        <div className="txt-header">
          <ul>
            
            <a className="nav_header1" href="/"><GiBeastEye />Funimation</a>
           
            <a className="nav_header" href="/login">Login</a>
            
            
            <a className="nav_header" href="/cadastro">Cadastro</a>
       
            <a className="nav_header" href="#">Minha Conta</a>
            
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Nav;
