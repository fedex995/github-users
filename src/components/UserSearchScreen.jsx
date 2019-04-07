import React, {Component} from "react";
import SearchContainer from "../containers/SearchContainer";
import UserInfo from "../containers/UserInfo";
import "./UserSearchScreen.css";
class UserSearchScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (

            <div className={"user-screen"}>
                {
                    this.props.showUserInfo ?
                        <UserInfo/> : <SearchContainer/>
                }
            </div>

        );
    }
}

export default UserSearchScreen;