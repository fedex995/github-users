import React from "react";
import "./ReposList.css";
import Loader from "./Loader";

const ReposList = ({repos, loadingRepos}) => (
    <div className={`repos-container section ${loadingRepos ? "loading" : ""}`}>
        {
            loadingRepos ?
                <Loader/> :
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