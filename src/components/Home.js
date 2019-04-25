import React, {Component} from "react";
import NavbarMain from './Common/NavbarMain';
import { Link } from "react-router-dom";
import '../components/Home.css';
import { VictoryBar, VictoryChart,VictoryPie } from "victory";

class Home extends Component{
    render(){
     
        return(
          
            <div className = "main-class-home"> 
                <NavbarMain/>
                <div className = "sub-class-about-home col-md-12">
                <div className="empty col-md-2"></div>
                <div className = "sub-class-para-home col-md-8">

                    <p class="para">
                    We are designing and developing the Smart Alert IoT Emergency system which will give alert to the user at the time of an emergency like natural disasters (wildfire, flooding). 
                    The system will consist of IoT based smart emergency nodes that will be installed with sensors like Heat, wind, moisture. 
                    The data from these smart sensor nodes will be transferred to cluster nodes, and then from these cluster nodes to the Cloud. T
                    he system will have two cloud databases, one of them will store the data related to the location of the cluster node as well as the smart node.
                    The other one will contain the data collected from the smart node
                    </p>

                </div>
                <div className="empty col-md-2"></div>
                </div>
                <div className="charts col-md-12">
                <div className="empty col-md-1"></div> 
                <div className="barChart col-md-5">
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
                <div className="empty col-md-1"></div> 
                <div className="pieChart col-md-4">
                <VictoryPie
                    data={[
                        { x: "Cats", y: 35 },
                        { x: "Dogs", y: 40 },
                        { x: "Birds", y: 55 }
                    ]}
                />        
                    
                </div>
                <div className="empty col-md-1"></div> 
                </div>
                <button className="register-button">
                    <Link
                        className="homeN"
                        to={{
                        pathname: "/register"
                        }}
                    >
                        Register to resolve Issue
                    </Link>
                </button>
            
            </div>
        );
        }
    
}

export default Home;