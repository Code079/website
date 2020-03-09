import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <ul class="menu vertical-center">
      <li>
        <a href="home/">Home</a>
      </li>
      <li>
        <a href="events/">Events</a>
      </li>
      <li>
        <a href="Artists/">Artists</a>
      </li>
    </ul>
  );
}
export default Navbar;
