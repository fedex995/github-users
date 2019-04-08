import { connect } from 'react-redux'
import {withRouter} from 'react-router'
import UserSearchScreen from "../components/UserSearchScreen";

const mapStateToProps = (state) => {
    return {
        loadingUser: state.ui.loadingUser,
        showUserInfo: state.ui.showUserInfo,
    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserSearchScreen));