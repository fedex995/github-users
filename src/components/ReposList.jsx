import React from "react";
import "./ReposList.css";

const ReposList = ({repos}) => (
    <div className={"repos-container section"}>
        {
            repos.map(repo => (
                <div className={"repo row"} key={repo.id}>
                    <label><b>Name:</b> {repo.name}</label>
                    <label><b>ID:</b> {repo.id}</label>
                </div>
            ))
        }
    </div>
);

export default ReposList;