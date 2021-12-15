import "./header.css";
import React from "react";
import { MdManageSearch } from 'react-icons/md'
import { GiBeastEye } from 'react-icons/gi'

const Nav = () => {
  return (
    <div className="todo">
        <section className="header">
            <div className="txt-header"> 
            <span><GiBeastEye />Funimation</span>
            <span><MdManageSearch />Pesquisar </span>
            </div>
        </section>
        
    </div>
  );
};

export default Nav;
