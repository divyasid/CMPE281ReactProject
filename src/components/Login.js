import React, {Component} from "react";
import NavbarMain from './Common/NavbarMain';
import './Login.css';


class Login extends Component{
    render(){
        return(
            <div className="super-login">
            <NavbarMain/>
                <div className="col-md-12 main-login">

                    <div className="empty col-md-3"></div>

                    <div className="login-form col-md-6">

                        <div className="login-text">
                         <h3>Please Enter Login Details</h3>
                        </div>
                    
                        <div class="input-group login-email">
                            <span class="input-group-addon" id="basic-addon1">EmailID</span>
                            <input type="text" class="form-control" placeholder="EmailID"/>
                        </div>

                        <div class="input-group login-password">
                            <span class="input-group-addon" id="basic-addon1">Password</span>
                            <input type="password" class="form-control" placeholder="Password"/>
                        </div>

                        <div className="login-submit-button">
                            <button type="submit" class="btn btn-default login-button-sub">Login</button>
                        </div>

                        <a href="/register">
                        <span className="signup-text">New User? click to SignUp</span></a>
                    
                    </div>

                    <div className="empty col-md-3"></div>
                
                </div>
            </div>
        );
    }
}

export default Login;