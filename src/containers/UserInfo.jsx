import { connect } from 'react-redux'
import actions from "../actions";
import {withRouter} from 'react-router'
import UserInfo from "../components/UserInfo";

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserInfo));