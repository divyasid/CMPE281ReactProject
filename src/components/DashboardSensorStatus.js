import React, {Component} from "react";
import NavbarSub from './Common/NavbarSub';
import { VictoryBar, VictoryChart,VictoryPie } from "victory";
import './DashboardSensorStatus.css';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
  };

class DashboardSensorStatus extends Component{

    constructor (props){
        super(props);
        this.state = {
            showingInfoWindow: false,  
            activeMarker: {},          
            selectedPlace: {},
            marker1ActiveFlag: false,
            marker2ActiveFlag: false,
            marker3ActiveFlag: false,
            marker4ActiveFlag: false,
        }
    };

      onMarker1Click = (props, marker, e) =>
        this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true,
        marker1ActiveFlag: true
        });

        onMarker2Click = (props, marker, e) =>
        this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true,
        marker2ActiveFlag: true
        });

        onMarker3Click = (props, marker, e) =>
        this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true,
        marker3ActiveFlag: true
        });

        onMarker4Click = (props, marker, e) =>
        this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true,
        marker4ActiveFlag: true
        });

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

        if(this.state.marker1ActiveFlag){
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
            </tr>
            <tr>
              <td>Jill</td>
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
          </table> 
          </div>
            )
            this.setState.marker1ActiveFlag = false;
        }

        if(this.state.marker2ActiveFlag){
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
            </tr>
            <tr>
              <td>tarun</td>
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
          </table> 
          </div>
            );
            this.setState.marker2ActiveFlag = false;
        }
        if(this.state.marker3ActiveFlag){
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
          </table> 
          </div>
            );
            this.setState.marker3ActiveFlag = false;
        }

        if(this.state.marker4ActiveFlag){
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
            </tr>
            <tr>
              <td>darryl</td>
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
          </table> 
          </div>
            )
            this.setState.marker4ActiveFlag = false;
        }


        return(
            <div className="super-dashboardmain">
            
                <NavbarSub/>

                    <div className="dashboardmain-heading">
                    Cloud-based IOT status view
                    </div>

                    <div className="dashboardsensor-dashboardbutton-main col-md-12">

                        <div class="btn-group dashboardsensor-dashboardbutton-sub col-md-12" role="group" aria-label="...">

                            <a href="/dashboardmain">
                            <button type="button" class="btn btn-default dashboardsensor-dashboardbutton-dasboard col-md-3">
                                Region-based IOT status view

                            </button></a>

                           
                            <button type="button" href="/dashboardsensorstatus" class="btn btn-default dashboardsensor-dashboardbutton-sensor col-md-3">
                            Cloud-based IOT status view

                            </button>
                           

                            <a href="/dashboardcloud">
                            <button type="button" href="/dashboardcloud" class="btn btn-default dashboardsensor-dashboardbutton-cloud col-md-3">
                            CloudBased-Dashboard
                            </button>
                            </a>

                            <a href="/dashboardregion">
                            <button type="button" href="/dashboardregion" class="btn btn-default dashboardsensor-dashboardbutton-region col-md-3">
                                RegionBased-Dashboard
                            </button>
                            </a>
                        </div>
                    </div>

                    <div className="dashboardsensor-table col-md-6">
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
                            initialCenter={{lat: 37.3511,lng: -121.87434}}
                        >
                        <Marker
                            onClick={this.onMarker1Click}
                            name={'Kenyatta International Convention Centre'}
                            position={{lat: 37.3511,lng: -121.87434}}
                            />
                        <Marker
                            onClick={this.onMarker2Click}
                            name={'SJSU'}
                            position={{lat: 37.3511,lng: -121.88434}}
                        />
                        <Marker
                            onClick={this.onMarker3Click}
                            name={'bolder park'}
                            position={{lat: 37.34211,lng: -121.874}}
                            />
                        <Marker
                            onClick={this.onMarker4Click}
                            name={'olinder'}
                            position={{lat: 37.36211,lng: -121.874}}
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
  })(DashboardSensorStatus);
