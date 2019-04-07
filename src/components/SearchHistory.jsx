import React from "react";
import {UserProfile} from "./UserInfoScreen";
import "./SearchHistory.css";

const SearchHistory = ({searches}) => (
    <div className={"searches-container"}>
        <h2>Search history</h2>
        <div className={"searches"}>
            {
                searches.map(user => (
                    <UserProfile user={user}/>
                ))
            }
        </div>
    </div>
);

export default SearchHistory;