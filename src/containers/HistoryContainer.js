import { connect } from 'react-redux'
import actions from "../actions";
import {withRouter} from 'react-router'
import SearchHistory from "../components/SearchHistory";

const mapStateToProps = (state) => {
    return {
        searches: state.history.allIds.map(id => state.history.byId[id])
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onUserClick: (username) => dispatch(actions.getUser(username))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchHistory));

