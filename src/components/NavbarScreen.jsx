import React, {Component} from "react";
import "./NavbarScreen.css";

class NavbarScreen extends Component {

    render() {
        return (
          <nav>
            <a onClick={() => this.props.history.push("/")}><label>Github User Search</label></a>
          </nav>
        );
    }
}

export default NavbarScreen;