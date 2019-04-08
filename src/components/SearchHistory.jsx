import React from "react";
import {UserProfile} from "./UserInfoScreen";
import "./SearchHistory.css";

const SearchHistory = ({searches, onUserClick}) => (
    <div className={"searches-container"}>
        <h2 className={"title"}>Search history</h2>
        <div className={"searches"}>
            {
                searches.length > 0 ?
                    searches.map(user => (
                        <UserProfile key={user.id} user={user} onUserClick={onUserClick}/>
                    )) :
                    <label className={"no-history-label"}>Your previous searches will appear here, go on and try it!</label>
            }
        </div>
    </div>
);

export default SearchHistory;