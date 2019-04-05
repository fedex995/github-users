import React, {Component} from "react";
import SearchContainer from "../containers/SearchContainer";

class UserSearchScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (

            <div className={"search-container"}>
                <SearchContainer/>
            </div>

        );
    }
}

export default UserSearchScreen;