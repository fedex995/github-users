import { connect } from 'react-redux'
import {withRouter} from 'react-router'
import UserInfoScreen from "../components/UserInfoScreen";

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserInfoScreen));