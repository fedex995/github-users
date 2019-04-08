import React from "react";
import "./Navbar.css";

const Navbar = ({history}) => (
    <nav>
        <button onClick={() => history.push("/")}><label>Github User Search</label></button>
    </nav>
);

export default Navbar;