import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import favicon from '../favicon.svg';
import '../App.css';

export default function AcctNavBar() {

    return (

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <img src={favicon} alt="logo" height="2.5%" width="2.5%" />
            <a class="navbar-brand ml-2" href="/">Smart Security Systems</a>

            <div class="navbar-collapse collapse w-100 order-3 dual-collapse2" id="navbarColor01">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Sign Out</a>
                    </li>
                </ul>
            </div>

        </nav>



    )
}


// export default function NavigationBar() {

//     return (
//         <div>
//             <Navbar bg="dark" fixed="top" >
//                 <img src={favicon} alt="logo" height="3%" width="3%" />
//                 <Navbar.Brand href="#home">Smart Security Systems</Navbar.Brand>
//                 <Nav pullRight>
//                     <Nav.Link href="/">Home</Nav.Link>
//                     <Nav.Link href="/about">About</Nav.Link>
//                 </Nav>
//                 <Button variant="outline-success" className="nav navbar-nav"><Nav.Link href="/logIn"></Nav.Link>Bob</Button>
//             </Navbar>
//         </div>
//     )
// }


