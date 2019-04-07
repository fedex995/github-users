import { connect } from 'react-redux'
import actions from "../actions";
import {withRouter} from 'react-router'
import SearchInput from "../components/SearchInput";

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = dispatch => {
    return {
        searchUser: (username) => dispatch(actions.getUser(username))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchInput));