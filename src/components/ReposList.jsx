import React from "react";
import "./ReposList.css";

const ReposList = ({repos}) => (
    <div className={"repos-container section"}>
        {
            repos.map(repo => (
                <div className={"repo row"} key={repo.id}>
                    <label><b>ID:</b> {repo.id}</label>
                    <label><b>Name:</b> <a href={repo.clone_url} target={"blank"}>{repo.name}</a></label>
                    <label><b>Description:</b> {repo.description || "-"}</label>
                    <div className={"actions"}>
                    </div>
                </div>
            ))
        }
    </div>
);

export default ReposList;