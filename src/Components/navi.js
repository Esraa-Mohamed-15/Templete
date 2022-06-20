import React , {Component} from 'react';
//import { Button } from 'react-bootstrap';
import { Navbar ,Nav } from 'react-bootstrap';
import './navi.css';
class Navi extends Component{
    render(){
        return(
     
     <div>
  <Navbar className="nav" expand="lg">
    <Navbar.Brand >
        <div>
    <h4> Beborn</h4>
    </div>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link  to="/"> Features</Nav.Link>
        <Nav.Link  href="#gallary"> Pricing </Nav.Link>
        <Nav.Link  href ="#portfollio">Log in</Nav.Link>
        <button> Sign up</button>
      </Nav> 
    </Navbar.Collapse>
  </Navbar>
     </div>
        )
        }
}
export default Navi;