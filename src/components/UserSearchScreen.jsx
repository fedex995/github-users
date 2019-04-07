import React, {Component} from "react";
import SearchContainer from "../containers/SearchContainer";
import "./UserSearchScreen.css";
import Loader from "./Loader";
class UserSearchScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (

            <div className={"user-screen"}>
                 <SearchContainer/>
            </div>

        );
    }
}

export default UserSearchScreen;