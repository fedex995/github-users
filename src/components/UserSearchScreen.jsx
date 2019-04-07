import React, {Component} from "react";
import SearchContainer from "../containers/SearchContainer";
import "./UserSearchScreen.css";
import Loader from "./Loader";
import SearchHistory from "./SearchHistory";
class UserSearchScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (

            <div className={"user-screen"}>
                <SearchContainer/>
                <SearchHistory searches={this.props.searches}/>
            </div>

        );
    }
}

export default UserSearchScreen;