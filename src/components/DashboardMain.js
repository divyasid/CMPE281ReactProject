import React, {Component} from "react";
import NavbarSub from './Common/NavbarSub';
import { VictoryBar, VictoryChart,VictoryPie } from "victory";
import './DashboardMain.css';

class DashboardMain extends Component{
    render(){
        return(
            <div className="super-dashboardmain">
            
                <NavbarSub/>

                

                    <div className="dashboardmain-heading">
                    Region-based IOT status view

                    </div>

                    <div className="dashboardmain-dashboardbutton-main col-md-12">

                        <div class="btn-group dashboardmain-dashboardbutton-sub col-md-12" role="group" aria-label="...">

                          
                            <button type="button" class="btn btn-default dashboardmain-dashboardbutton-dasboard col-md-3">
                            Region-based IOT status view

                            </button>
                            
                            

                            <a href="/dashboardsensorstatus">
                            <button type="button" href="/dashboardsensorstatus" class="btn btn-default dashboardmain-dashboardbutton-sensor col-md-3">
                            Cloud-based IOT status view

                            </button>
                            </a>

                            <a href="/dashboardcloud">
                            <button type="button" href="/dashboardcloud" class="btn btn-default dashboardmain-dashboardbutton-cloud col-md-3">
                            CloudBased-Dashboard
                            </button>
                            </a>

                            <a href="/dashboardregion">
                            <button type="button" href="/dashboardregion" class="btn btn-default dashboardmain-dashboardbutton-region col-md-3">
                                RegionBased-Dashboard
                            </button>
                            </a>
                        </div>
                    </div>

                    <div className="dashboardmain-charts clo-md-12">

                        <div className="dashboard-barChart col-md-5">
                            <VictoryChart domainPadding={40}>
                                <VictoryBar
                                style={{ data: { fill: "blue" } }}
                                data={[
                                { data1: "A", data2: 1234 },
                                { data1: "B", data2: 2048 },
                                { data1: "C", data2: 2600 },
                                { data1: "D", data2: 9000 }
                                        ]}
                                    x="data1"
                                    y="data2"
                                />
                            </VictoryChart>
                        </div>
                        
                        <div className="dashboardmain-empty col-md-2"></div> 
                
                        <div className="dashboard-pieChart col-md-5">
                            <VictoryPie
                                data={[
                                    { x: "Cats", y: 35 },
                                    { x: "Dogs", y: 40 },
                                    { x: "Birds", y: 55 }
                                ]}
                            />        
                    
                            </div>
                    
                    </div>
                

                
                </div>
            
            
        );
    }
}
export default DashboardMain;