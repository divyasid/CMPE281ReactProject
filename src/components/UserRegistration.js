import React, {Component} from "react";
import NavbarMain from './Common/NavbarMain';
import './UserRegistration.css';

class UserRegister extends Component{
    render(){
        return(
            <div>
                <div className = "main-class">
                    <NavbarMain/>
                    
                    <div className="Form-control form user-register-main col-md-12">

                        <div className="side-picture col-md-6">

                            <div className = "image col-md-6">

                            <img src={require('../Images/register.jpg')}/>
                            
                            </div>
                        </div>

                        <div className="empty col-md-1"></div>

                        <div className="form-main col-md-5">

                            <div className="user-form col-md-10">
                            
                                <div class="input-group firstname">
                                <span class="input-group-addon" id="basic-addon1">FirstName</span>
                                <input type="text" class="form-control" placeholder="First Name"/>
                                </div>

                                <div class="input-group lastname">
                                <span class="input-group-addon" id="basic-addon1">LastName</span>
                                <input type="text" class="form-control" placeholder="Last Name"/>
                                </div>

                                <div class="input-group username">
                                <span class="input-group-addon" id="basic-addon1">Username</span>
                                <input type="text" class="form-control" placeholder="Username"/>
                                </div>

                                <div class="input-group password">
                                <span class="input-group-addon" id="basic-addon1">Password</span>
                                <input type="password" class="form-control" placeholder="Password"/>
                                </div>

                                <div class="input-group email">
                                <span class="input-group-addon" id="basic-addon1">EmailID</span>
                                <input type="text" class="form-control" placeholder="EmailID"/>
                                </div>

                                <div className="submit-button">
                                <button type="submit" class="btn btn-default button-sub">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default UserRegister;