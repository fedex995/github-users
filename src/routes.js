import React from 'react';
import {Route, Switch} from 'react-router';
import UserSearch from './containers/UserSearch';
import NavbarScreen from "./containers/Navbar";


const routes = (
        <div className="main-container">
            <NavbarScreen/>
            <Switch>
                <Route exact path='/' component={UserSearch}/>
            </Switch>
        </div>
);

export default routes;