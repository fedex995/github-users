import { connect } from 'react-redux'
import actions from "../actions";
import {withRouter} from 'react-router'
import UserSearchScreen from "../components/UserSearchScreen";

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserSearchScreen));