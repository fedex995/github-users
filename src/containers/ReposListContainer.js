import { connect } from 'react-redux'
import {withRouter} from 'react-router'
import ReposList from "../components/ReposList";

const mapStateToProps = (state) => {
    return {
        loadingRepos: state.ui.loadingRepos,
        repos: state.repos
    }
};

const mapDispatchToProps = dispatch => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ReposList));