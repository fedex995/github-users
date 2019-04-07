import React from "react";
import "./UserInfo.css";

const UserInfo  = ({user}) => (
    <div className="user-info-container">
        <div className={"row title-info"}>
            <div className={"col"}>
                <img className={"avatar"} src={user.avatar_url}/>
                <h2>{user.login}</h2>
                <a href={user.html_url} target={"blank"}>Go to profile</a>
            </div>
        </div>
        <div className={"row highlights"}>
            {
                [
                    {title: "Public repos", value: user.public_repos},
                    {title: "Public gists", value: user.public_gists},
                    {title: "Followers", value: user.followers},
                    {title: "Following", value: user.following},
                ].map(elem => (
                    <div className={"col"} key={elem.title}>
                        <label>{elem.title}</label>
                        <label>{elem.value}</label>
                    </div>
                ))
            }
        </div>
    </div>
);

export default UserInfo;