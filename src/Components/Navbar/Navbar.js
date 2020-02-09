import React from 'react';
import './Navbar.scss';
// import img from '../'

import {
    Link
  } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function Navbar() {
//   let active = document.querySelector('.active')
//   let link = document.querySelectorAll('.a')
//   function active(){
//     for(i = 0; i < link.length; i++){
//         link[i].addEventListener("Click", function(){
//             this.addClass('active')
//         })
//     }
//   }
  return (
    <Container fluid className="sphere">
    <Row>
        <Col md={2}>
            <img src="https://static.wixstatic.com/media/c19c76_e1ee443d4c5e4e3197a25eec7a0a97e5.png/v1/fill/w_47,h_49,al_c,q_85,usm_0.66_1.00_0.01/c19c76_e1ee443d4c5e4e3197a25eec7a0a97e5.webp" alt="" />
            <h4>
                <Link to="/">
                    <strong>SPHERE</strong>
                    <br />
                    CONSTRUCTIONS
                </Link>
            </h4>
        </Col>
        <Col md={10}>
                <ul>
                    <li>
                    <Link to="/" className="active">Home</Link>
                    </li>
                    <li>
                    <Link to="/Services">Services</Link>
                    </li>
                    <li>
                    <Link to="/About">About</Link>
                    </li>
                    <li>
                    <Link to="/Projects">Projects</Link>
                    </li>
                    <li>
                    <Link to="/Clients">Clients</Link>
                    </li>
                    <li>
                    <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
        </Col>
    </Row>
    </Container>
  );
}
export default Navbar;
