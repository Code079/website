import React from "react";
import Front from "../assets/Front.jpg";
import LogoPTN from "../assets/LogoPTN.png";
import "./Header.css";
import Navbar from "./Navbar";

function Header() {
  return (
    <div>
      <img class="head" src={Front} alt="Head"></img>
      <div class="header">
        <img class="logo" src={LogoPTN} alt="Logo"></img>
        <Navbar />
      </div>
    </div>
  );
}
export default Header;
