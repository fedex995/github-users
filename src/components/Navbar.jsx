import React from "react";
import "./Navbar.css";

const Navbar = ({history}) => (
    <nav>
        <a onClick={() => history.push("/")}><label>Github User Search</label></a>
    </nav>
);

export default Navbar;