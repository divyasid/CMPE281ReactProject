import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home.js';
import UserRegister from './components/UserRegistration.js';
import DashboardMain from './components/DashboardMain.js';
import DashboardSensorStatus from './components/DashboardSensorStatus.js';
import DashboardCloud from './components/DashboardCloud.js';
import DashboardRegion from './components/DashboardRegion.js';
import Login from './components/Login.js';
import SmartEmergencyNode from './components/SmartEmergencyNodeComponent/SmartEmergencyNode.js';
import SmartEmergencySensor from './components/SmartEmergencySensorComponent/SmartEmergencySensorComponent.js';

import * as serviceWorker from './serviceWorker';

const  routing = (
    <Router>
        <div>
            <Route path ="/" exact component = {Home} />
            <Route path ="/register" exact component = {UserRegister} />
            <Route path ="/login" exact component = {Login} />
            <Route path ="/dashboardmain" exact component = {DashboardMain} />
            <Route path ="/dashboardsensorstatus" exact component = {DashboardSensorStatus} />
            <Route path ="/dashboardcloud" exact component = {DashboardCloud} />
            <Route path ="/dashboardregion" exact component = {DashboardRegion} />
            <Route path ="/smartemergencynode" exact component = {SmartEmergencyNode} />
            <Route path ="/smartemergencysensor" exact component = {SmartEmergencySensor} />

        </div>
    </Router>
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
ReactDOM.render(routing, document.getElementById('root'))
serviceWorker.unregister();
