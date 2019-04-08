import React, {Component} from "react";
import "./UserInfoScreen.css";
import ReposListContainer from "../containers/ReposListContainer";
import arrow from "../assets/arrow-up-DARK.svg";

class UserInfoScreen extends Component {

    constructor() {
        super();
        this.state = {
            currentTab: 0,
            showInfo: false
        }
    }

    componentDidMount() {
        if (this.props.user.id)
            setTimeout(() => this.setState({showInfo: true}), 300);

    }
    render() {
        const user = this.props.user;
        if(!user.id) this.props.history.push("/");

        return (
            <div className={`user-info-container ${this.state.showInfo && "show"}`}>
                <div className={"back-container"} onClick={() => this.props.history.goBack()}>
                    <img alt={"back"} src={arrow}/>
                    <label>Go Back</label>
                </div>
                <UserProfile user={user}/>
                <div className={"row section highlights"}>
                    {
                        [
                            {title: "Public repos", value: user.public_repos},
                            {title: "Public gists", value: user.public_gists},
                            {title: "Followers", value: user.followers},
                            {title: "Following", value: user.following},
                        ].map(elem => (
                            <div className={"col"} key={elem.title}>
                                <label><b>{elem.title}</b></label>
                                <label>{elem.value}</label>
                            </div>
                        ))
                    }
                </div>
                <div className={"tabs section row"}>
                    {
                        ["Profile", "Repos"].map((elem, i) => (
                            <div key={elem} className={"col" + (i === this.state.currentTab ? " active" : "")} onClick={() => this.setState({currentTab: i})}>
                                <label>{elem}</label>
                            </div>
                        ))
                    }
                </div>
                {
                    this.state.currentTab === 0 ?
                        <UserInfoDetails user={user}/> : <ReposListContainer/>
                }
            </div>
        )
    }
}

//TODO split these in different files

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

export const UserProfile = ({user, onUserClick}) => (
    <div className={`row section user-info ${onUserClick ? "pointer" : ""}`} key={user.id} onClick={onUserClick ? () => onUserClick(user.login) : null}>
        <div className={"col"}>
            <img className={"avatar"} alt={"avatar"} src={user.avatar_url}/>
            <h2>{user.login}</h2>
            <a href={user.html_url} onClick={(e) => e.stopPropagation()} target={"blank"}>Go to profile</a>
            {user.visited && <label>Visited {user.visited} {`time${(user.visited === 1 ? "" : "s")}`}</label>}
        </div>
    </div>
);

export default UserInfoScreen;