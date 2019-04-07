import React, {Component} from "react";
import "./UserInfo.css";

class UserInfo extends Component {

    constructor() {
        super();
        this.state = {
            currentTab: 0
        }
    }

    render() {
        const user = this.props.user;

        return (
            <div className="user-info-container">
                <div className={"row section title-info"}>
                    <div className={"col"}>
                        <img className={"avatar"} alt={"avatar"} src={user.avatar_url}/>
                        <h2>{user.login}</h2>
                        <a href={user.html_url} target={"blank"}>Go to profile</a>
                    </div>
                </div>
                <div className={"row section highlights"}>
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
                <div className={"tabs section row"}>
                    {
                        ["More info", "Repos"].map((elem, i) => (
                            <div key={elem} className={"col" + (i === this.state.currentTab ? " active" : "")} onClick={() => this.setState({currentTab: i})}>
                                <label>{elem}</label>
                            </div>
                        ))
                    }
                </div>
                {
                    this.state.currentTab === 0 ?
                        <UserInfoDetails user={user}/> : <div>repos</div>
                }
            </div>
        )
    }
}

const UserInfoDetails = ({user}) => {
    // Prepare the user data we want to render.
    const data = [
        {title: "ID", value: user.id},
        {title: "Name", value: user.name},
        {title: "Type", value: user.type},
        {title: "Company", value: user.company},
        {title: "Blog", value: user.blog},
        {title: "Location", value: user.location},
        {title: "Email", value: user.email},
        {title: "Bio", value: user.bio},
        {title: "Created at", value: new Date(user.created_at).toDateString()},
        {title: "Updated at", value: new Date(user.updated_at).toDateString()},
    ];
    return (
        <div className={"details section"}>
            {
                data.map(element => (
                    element.value ?
                        <div className={"row"} key={element.title}>
                            <label><b>{element.title}:</b> {element.value}</label>
                        </div> : null
                ))
            }
        </div>
    );
};

export default UserInfo;