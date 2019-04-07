import React, {Component} from "react";
import "./Navbar.css";

class Navbar extends Component {

    render() {
        return (
          <nav>
            <a onClick={() => this.props.history.push("/")}><label>Github User Search</label></a>
          </nav>
        );
    }
}

export default Navbar;