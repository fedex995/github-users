import React from 'react';
import {Route, Switch} from 'react-router';
import UserSearch from './containers/UserSearch';
import NavbarScreen from "./containers/NavbarContainer";
import UserInfoContainer from "./containers/UserInfoContainer";

/*
    Routes of the project. The user profile is separated from the input search.
    Navbar is always visible.
 */
const routes = (
        <div className="main-container">
            <NavbarScreen/>
            <Switch>
                <Route exact path='/' component={UserSearch}/>
                <Route exact path='/user' component={UserInfoContainer}/>
            </Switch>
        </div>
);

export default routes;