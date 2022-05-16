import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Button,Nav,NavDropdown,Container,Form,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../images/logo.png"
import '../App.css';




export default function Header() {
  return (
    <div>
        <link rel="stylesheet"
          href=
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
 
     <Navbar bg="white" expand="lg">
  <Container fluid>

    <Navbar.Brand href="#">
    <img  src={logo} alt="Workflow" style={{width:"5.7vw",height:"4vw" , marginLeft:"5.3vw",marginTop:"0.8vw",marginRight:"6vw"}} />
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px'}}
        navbarScroll
      >
       
        <NavDropdown title="360 Planner" class="nav-link dropdown-toggle " href="#"  aria-expanded="true" />
        <NavDropdown title="Her" class="nav-link dropdown-toggle " href="#"  aria-expanded="true" />
        <NavDropdown title="Him" class="nav-link dropdown-toggle " href="#"  aria-expanded="true" />

       <NavDropdown title="The Wedding" class="nav-link dropdown-toggle " href="#"  aria-expanded="true" >
          <NavDropdown.Item href="#action3" class="items">Venues</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Outdoor Wedding Venues</NavDropdown.Item>
          <NavDropdown.Item href="#action3">Videographers</NavDropdown.Item>
          <NavDropdown.Item href="#action3">Photographers</NavDropdown.Item>
          <NavDropdown.Item href="#action3">DJs</NavDropdown.Item>
          <NavDropdown.Item href="#action3">More...</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Vendors" class="nav-link dropdown-toggle " href="#"  aria-expanded="true" />

        <NavDropdown title="Gallery" class="nav-link dropdown-toggle " href="#"  aria-expanded="true" />

        <NavDropdown title="Ideas & More" class="nav-link dropdown-toggle " href="#"  aria-expanded="true" />

        <NavDropdown title="Take a Tour" class="nav-link dropdown-toggle " href="#"  aria-expanded="true" style={{marginRight:'-10vw'}}/>

      </Nav>





      <Form >
          
        <div class="form-group has-search">
    <span class="fa fa-search form-control-feedback"></span>
    <input type="search"  placeholder="Search"
          class="box" style={{borderRadius:"0.4vw",height:"2vw",borderColor:" #e2e8f0"}}
      />
  </div>
        
      </Form>
      <div><i class="fa fa-user-plus step11"></i>
      <span style={{paddingBottom: "5px", paddingRight: "4px", paddingLeft: "4px",fontWeight:"bold"}}>ع </span> 
      </div>
      
    </Navbar.Collapse>
  </Container>
</Navbar>

    </div>
  )
}
