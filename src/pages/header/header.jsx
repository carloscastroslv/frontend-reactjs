import React from "react";
import "./header.css";

function Header() {
  return (
    <>
      <div className="header">
        <h1>Logo</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Sobre</li>
            <li>Contato</li>
            <li>Trabalhe conosco</li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
