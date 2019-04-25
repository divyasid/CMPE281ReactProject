import React, {Component} from "react";
import NavbarSub from './Common/NavbarSub';
import { VictoryBar, VictoryChart,VictoryPie } from "victory";
import './DashboardCloud.css';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
  };

class DashboardCloud extends Component{
    constructor (props){
        super(props);
        this.state = {
        showingInfoWindow: false,  
        activeMarker: {},        
        selectedPlace: {} ,
        activeFlag1: false,
        activeFlag2: false,
        activeFlag3: false,
        activeFlag4: false,
        view1Flag: false ,    
      }
    };
  
    onMarker1Click = (props, marker, e) =>
        this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true,
        activeFlag1: true
        });

    onMarker2Click = (props, marker, e) =>
        this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true,
        activeFlag2: true
        });

    onMarker3Click = (props, marker, e) =>
        this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true,
        activeFlag3: true
        });

    onMarker4Click = (props, marker, e) =>
        this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true,
        activeFlag4: true
        });
    
    view1 = () =>
        this.setState({view1Flag : true});
    
  
   onClose = props => {
     if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
    render(){
        let tabledata1 = null;
        let tabledata2 = null;
        let tabledata3 = null;
        let tabledata4 = null;
        let modaldata1 = null;

        if(this.state.view1Flag){
            modaldata1=(
                <div id="myModal" class="modal fade modal-whole" role="dialog">
                <div class="modal-dialog">

                    <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title Modal-Header">Sensor Data</h4>
                    </div>
                    <div className = "dashboardsensor-tablemain" style = {{overflowX: "auto"}}>
                        <table style={{borderCollapse: "collapse", borderSpacing:0, width:"100%", border:"2px solid #ddd",padding:"5px"}}>
                        <tr className="dashboardsensor-tablemain-heading">
                        <th>Sensor Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Data</th>
                        <th>Alert</th>
                        
                        </tr>
                        <tr>
                        <td>shivam</td>
                        <td>Smith</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        </tr>
                        <tr>
                        <td>Eve</td>
                        <td>Jackson</td>
                        <td>94</td>
                        <td>50</td>
                        <td>50</td>
                        </tr>
                        <tr>
            
                        </tr>
                    </table> 
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
                </div>

                </div>
                </div>
                

            )
        }

        if(this.state.activeFlag1){
            console.log(true);
            tabledata1 = (
                <div className = "dashboardsensor-tablemain" style = {{overflowX: "auto"}}>
                <table style={{borderCollapse: "collapse", borderSpacing:0, width:"100%", border:"2px solid #ddd",padding:"5px"}}>
                <tr className="dashboardsensor-tablemain-heading">
                  <th>Sensor Name</th>
                  <th>Type</th>
                  <th>Location</th>
                  <th>Company</th>
                  <th>Status</th>
                  <th>Historical Data</th>
                </tr>
                <tr>
                  <td>shivam</td>
                  <td>Smith</td>
                  <td>50</td>
                  <td>50</td>
                  <td>50</td>
                  <td>
                  <button className= "view-button">view</button>
                  </td>
                </tr>
                <tr>
                  <td>Eve</td>
                  <td>Jackson</td>
                  <td>94</td>
                  <td>50</td>
                  <td>50</td>
                  <td>
                  <button className= "view-button">view</button>
                  </td>
                </tr>
                <tr>
    
                </tr>
              </table> 
              </div>
                )
            this.setState.activeFlag1 = false;
        }

        if(this.state.activeFlag2){
            console.log(true);
            tabledata2 = (
                <div className = "dashboardsensor-tablemain" style = {{overflowX: "auto"}}>
                <table style={{borderCollapse: "collapse", borderSpacing:0, width:"100%", border:"2px solid #ddd",padding:"5px"}}>
                <tr className="dashboardsensor-tablemain-heading">
                  <th>Sensor Name</th>
                  <th>Type</th>
                  <th>Location</th>
                  <th>Company</th>
                  <th>Status</th>
                  <th>Historical Data</th>
                </tr>
                <tr>
                  <td>darryl</td>
                  <td>Smith</td>
                  <td>50</td>
                  <td>50</td>
                  <td>50</td>
                  <td>
                  <button onClick= {this.view1} class="view-button" data-toggle="modal" data-target="#myModal">view</button>
                  </td>
                </tr>
                <tr>
                  <td>Eve</td>
                  <td>Jackson</td>
                  <td>94</td>
                  <td>50</td>
                  <td>50</td>
                  <td>
                  <button className= "view-button">view</button>
                  </td>
                </tr>
                <tr>
    
                </tr>
              </table> 
              </div>
                )
            this.setState.activeFlag2 = false;
        }

        if(this.state.activeFlag3){
            console.log(true);
            tabledata3 = (
            <div className = "dashboardsensor-tablemain" style = {{overflowX: "auto"}}>
            <table style={{borderCollapse: "collapse", borderSpacing:0, width:"100%", border:"2px solid #ddd",padding:"5px"}}>
            <tr className="dashboardsensor-tablemain-heading">
              <th>Sensor Name</th>
              <th>Type</th>
              <th>Location</th>
              <th>Company</th>
              <th>Status</th>
              <th>Historical Data</th>
            </tr>
            <tr>
              <td>tarun</td>
              <td>Smith</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>
              <button className= "view-button">view</button>
              </td>
            </tr>
            <tr>
              <td>Eve</td>
              <td>Jackson</td>
              <td>94</td>
              <td>50</td>
              <td>50</td>
              <td>
                  <button className= "view-button">view</button>
                  </td>
              </tr>
            <tr>

            </tr>
          </table> 
          </div>
            )
            this.setState.activeFlag3 = false;
        }

        if(this.state.activeFlag4){
            console.log(true);
            tabledata4 = (
                <div className = "dashboardsensor-tablemain" style = {{overflowX: "auto"}}>
                <table style={{borderCollapse: "collapse", borderSpacing:0, width:"100%", border:"2px solid #ddd",padding:"5px"}}>
                <tr className="dashboardsensor-tablemain-heading">
                  <th>Sensor Name</th>
                  <th>Type</th>
                  <th>Location</th>
                  <th>Company</th>
                  <th>Status</th>
                  <th>Historical Data</th>
                </tr>
                <tr>
                  <td>Jill</td>
                  <td>Smith</td>
                  <td>50</td>
                  <td>50</td>
                  <td>50</td>
                  <td>
                  <button className= "view-button">view</button>
                  </td>
                </tr>
                <tr>
                  <td>Eve</td>
                  <td>Jackson</td>
                  <td>94</td>
                  <td>50</td>
                  <td>50</td>
                  <td>
                  <button className= "view-button">view</button>
                  </td>
                </tr>
                <tr>
    
                </tr>
              </table> 
              </div>
                )
            this.setState.activeFlag4 = false;
        }

        return(
            <div className="super-dashboardmain">
            
                <NavbarSub/>

                {modaldata1}

                    <div className="dashboardmain-heading">
                        CLOUD DASHBOARD
                    </div>

                    <div className="dashboardmain-dashboardbutton-main col-md-12">

                        <div class="btn-group dashboardcloud-dashboardbutton-sub col-md-12" role="group" aria-label="...">

                            <a href="/dashboardmain">
                            <button type="button" class="btn btn-default dashboardcloud-dashboardbutton-dasboard col-md-3">
                                Region-based IOT status view

                            </button> </a>

                            <a href="/dashboardsensorstatus">
                            <button type="button" href="/dashboardsensorstatus" class="btn btn-default dashboardcloud-dashboardbutton-sensor col-md-3">
                            Cloud-based IOT status view
                            </button>
                            </a>

                            
                            <button type="button" href="/dashboardcloud" class="btn btn-default dashboardcloud-dashboardbutton-cloud col-md-3">
                            CloudBased-Dashboard
                            </button>
                           

                            <a href="/dashboardregion">
                            <button type="button" href="/dashboardregion" class="btn btn-default dashboardcloud-dashboardbutton-region col-md-3">
                                RegionBased-Dashboard
                            </button>
                            </a>
                        </div>
                    </div>
                    
                    <div className="dashboardcloud-table col-md-6">
                        {tabledata1}
                        {tabledata2}
                        {tabledata3}
                        {tabledata4}
                    </div>


                    <div className="google-maps-component col-md-5">
                        <Map
                            google={this.props.google}
                            zoom={14}
                            style={mapStyles}
                            initialCenter={{lat: 37.3353,lng: -121.8803}}
                        >
                        <Marker
                            onClick={this.onMarker1Click}
                            name={'SJSU'}
                            position={{lat: 37.3353,lng: -121.8803}}
                            />
                        <Marker
                            onClick={this.onMarker2Click}
                            name={'Hensley'}
                            position={{lat: 37.3453,lng: -121.8903}}
                            />
                        <Marker
                            onClick={this.onMarker3Click}
                            name={'Santa Clara St.'}
                            position={{lat: 37.3399,lng: -121.8803}}
                            />
                        <Marker
                            onClick={this.onMarker4Click}
                            name={'William St. Park'}
                            position={{lat: 37.3338,lng: -121.8703}}
                            />
                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                            onClose={this.onClose}
                        >
                        <div>
                            <h4>{this.state.selectedPlace.name}</h4>
                        </div>
                        </InfoWindow>
                        </Map>
                    </div>

            </div>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCA81-0kQKRBGJ8ueJ7Z2_cHx2VDAwPROw '
  })(DashboardCloud);
