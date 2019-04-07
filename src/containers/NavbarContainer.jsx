import { connect } from 'react-redux'
import actions from "../actions";
import {withRouter} from 'react-router'
import Navbar from "../components/Navbar";

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));

