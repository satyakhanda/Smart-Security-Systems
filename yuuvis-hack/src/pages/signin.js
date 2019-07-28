import React, { Component } from "react";
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import NavigationBar from '../components/NavigationBar';


class Landing extends Component {


  render() {

    return (
      <div>
        <NavigationBar></NavigationBar>
        <Nav />
        <div className="landing">
          <div className="container pt-5 justify-content-center text-center ">
            <h1 className="center">Smart Security in the palm of your hands.</h1>
            </div>
        </div>
        <div className="signInBackground"></div>
        <div className="signInArea">
          <div className="d-flex justify-content-center">
            <div className="div  signInCard">
            
              
              <h3 className="text-center   pt-5">Sign In</h3>
              <form className="mt-3" >
                <div className="row">
                  <div className="col-sm-5">
                    <b><label for="email" className="col-form-label"><i class="fas fa-envelope-square mr-2"></i>Email Address:</label></b>
                  </div>
                  <div className="col-sm-5">
                    <input
                      name="email"
                      // value={email}
                      // onChange={this.onChange}
                      type="text"
                      placeholder="Enter Email Address"
                      id="email"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-5">
                    <b><label for="password" className=" col-form-label"><i class="fas fa-lock mr-2"></i>Password:</label></b>
                  </div>
                  <div className="col-sm-5">
                    <input
                      name="password"
                      // value={password}
                      // onChange={this.onChange}
                      type="password"
                      placeholder="Enter Password"
                      id="password"
                    />
                  </div>
                </div>
                <br></br>
                <div className="text-center">
                  <button name="button" className="btn btn-lg bggreen text-white p-2 hvr-grow-shadow mt-2 border-dark" onClick={this.onSubmit} type="submit">

                    <b><Link className="text-white" to="/search">Sign In</Link></b>

                  </button>
                </div>

                <div>
                  <br></br>
                  <b><p className="orange text-center"><Link className="orange" to="/">Forgot Password</Link></p></b>
                  <b><p className="orange text-center"><Link className="orange" to="/signup">Dont have an account? Sign Up!</Link></p></b>
                </div>
                {/* {error && <p className="text-white darkbackground p-1 mt-3"><b>{error.message}</b></p>} */}
              </form>
            </div>
          </div>
        </div>


      </div>
    )
  }

};


export default Landing;

