import React from "react";

const ReposList = ({repos}) => (
    <div className={"repo-container"}>
        {
            repos.map(repo => (
                <div>

                </div>
            ))
        }
    </div>
);

export default ReposList;