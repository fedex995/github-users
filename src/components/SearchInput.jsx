import React, {Component} from "react";
import "./SearchInput.css";
import Loader from "./Loader";

class SearchInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
    }

    onInputChange(event) {
        this.setState({value: event.target.value})
    }
    onInputChangeRef = this.onInputChange.bind(this);

    onFormSubmit(event) {
        event.preventDefault();
        this.props.searchUser(this.state.value);
    }
    onFormSubmitRef = this.onFormSubmit.bind(this);

    render() {
        return (
            <form className={"search-container"} onSubmit={this.onFormSubmitRef}>
                <input value={this.state.value} onChange={this.onInputChangeRef} autoFocus={true}/>
                <label>Type in the user you want to look up</label>
                {
                    this.props.loadingUser ?
                        <Loader/> :
                        <button className={"alternative"} type={"submit"}>Search</button>
                }
                <label className={`error-label ${this.props.userNotFound && "show"}`}>The user doesn't exist!</label>
            </form>
        );
    }
}

export default SearchInput;