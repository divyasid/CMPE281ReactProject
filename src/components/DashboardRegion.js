import React, {Component} from "react";
import NavbarSub from './Common/NavbarSub';
import { VictoryBar, VictoryChart,VictoryPie } from "victory";
import './DashboardRegion.css';

class DashboardRegion extends Component{
    render(){
        return(
            <div className="super-dashboardmain">
            
                <NavbarSub/>

                

                    <div className="dashboardmain-heading">
                        REGION DASHBOARD
                    </div>

                    <div className="dashboardregion-dashboardbutton-main col-md-12">

                        <div class="btn-group dashboardregion-dashboardbutton-sub col-md-12" role="group" aria-label="...">

                            <a href="/dashboardmain">
                            <button type="button" class="btn btn-default dashboardregion-dashboardbutton-dasboard col-md-3">
                                Region-based IOT status view

                            </button>
                            </a>

                            <a href="/dashboardsensorstatus">
                            <button type="button" href="/dashboardsensorstatus" class="btn btn-default dashboardregion-dashboardbutton-sensor col-md-3">
                            Cloud-based IOT status view

                            </button>
                            </a>

                            <a href="/dashboardcloud">
                            <button type="button" href="/dashboardcloud" class="btn btn-default dashboardregion-dashboardbutton-cloud col-md-3">
                            CloudBased-Dashboard
                            </button>
                            </a>

                           
                            <button type="button" href="/dashboardregion" class="btn btn-default dashboardregion-dashboardbutton-region col-md-3">
                                RegionBased-Dashboard
                            </button>
                            
                        </div>
                    </div>


                    </div>
        );
    }
}
export default DashboardRegion;
