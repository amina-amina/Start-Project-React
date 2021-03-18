import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "./../../assets/main.css"
import bgImage from  "./../../assets/bg-01.jpg"

export default class RegisterPage extends Component {
    render() {
        return (
            <div>
                 <div>
                    <div className="limiter">
                        <div className="container-login100" style={{ backgroundImage: `url(${bgImage})` }}>
                            <div className="wrap-login100">
                                <form className="login100-form validate-form">
                                    <span className="login100-form-logo">
                                        <i className="fas fa-key" />
                                    </span>
                                    <span className="login100-form-title p-b-34 p-t-27">
                                        Registre
                                    </span>
                                    <div className="wrap-input100 validate-input" data-validate="Enter firstname">
                                        <input className="input100" type="text" name="firstname" placeholder="firstname" />
                
                                    </div>
                                    <div className="wrap-input100 validate-input" data-validate="Enter lastname">
                                        <input className="input100" type="text" name="lastname" placeholder="lastname" />
                
                                    </div>

                                    <div className="wrap-input100 validate-input" data-validate="Enter Email">
                                        <input className="input100" type="email" name="email" placeholder="Email" />
                
                                    </div>

                                    

                                    <div className="wrap-input100 validate-input" data-validate="Enter username">
                                        <input className="input100" type="text" name="username" placeholder="Username" />
                
                                    </div>
                                    <div className="wrap-input100 validate-input" data-validate="Enter password">
                                        <input className="input100" type="password" name="pass" placeholder="Password" />
                                    </div>

                                    <div className="wrap-input100 validate-input" data-validate="Repeat password">
                                        <input className="input100" type="password" name="pass" placeholder="Repeat Password" />
                                    </div>
                                    
                                    <div className="container-login100-form-btn">
                                        <button className="login100-form-btn">
                                            Registre
                                    </button>
                                    </div>
                                    <div className="text-center p-t-90">
                                        <a className="txt1" href="#">
                                            <Link to= "/admin">log into your account</Link>
            
                                         </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div id="dropDownSelect1" ></div>
                </div>


            </div>
        )
    }
}
