import "./header.css";
import React from "react";
import { MdManageSearch } from "react-icons/md";
import { GiBeastEye } from "react-icons/gi";

const Nav = () => {
  return (
    <div className="todo">
      <section className="header">
        <div className="txt-header">
          <span>
            <GiBeastEye />
            Funimation
          </span>
          <form>
          <label className="search"><MdManageSearch /></label>
          <input id="pesquisa" className="pesquisa" type="text" placeholder="Pesquise seu anime aqui"></input>      
          </form>
        </div>
      </section>
    </div>
  );
};

export default Nav;
