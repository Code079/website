import React from "react";
import Front from "../assets/Front.jpg";
import LogoPTN from "../assets/LogoPTN.png";
import "./Header.css";
import Navbar from "./Navbar";

function Header() {
  return (
    <div class="head">
      <div class="header">
        <img class="logo" src={LogoPTN} alt="Logo"></img>
        <Navbar />
      </div>
    </div>
  );
}
export default Header;
