import React, {Component} from "react";
import SearchContainer from "../containers/SearchContainer";
import "./UserSearchScreen.css";
import HistoryContainer from "../containers/HistoryContainer";

class UserSearchScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (

            <div className={"user-screen"}>
                <SearchContainer/>
                <HistoryContainer/>
            </div>

        );
    }
}

export default UserSearchScreen;