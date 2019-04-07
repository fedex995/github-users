import { connect } from 'react-redux'
import actions from "../actions";
import {withRouter} from 'react-router'
import UserSearchScreen from "../components/UserSearchScreen";

const mapStateToProps = (state) => {
    return {
        loadingUser: state.ui.loadingUser,
        showUserInfo: state.ui.showUserInfo,
        searches: state.history
    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserSearchScreen));