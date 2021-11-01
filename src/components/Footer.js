import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'



export default function Footer() {


    return (
        <Navbar style={{color:'white'}} bg="dark" variant="dark" sticky="bottom" >
        <Nav className="justify-content-start">
  
          <Nav.Item>
            
          <Nav.Link style={{color:'white'}} >Created by Roland Matheson </Nav.Link>
  
          </Nav.Item>



          <Nav.Item>
            
          <Nav.Link style={{color:'white'}}     >Hosted on Cloudflare and Heroku </Nav.Link>
  
          </Nav.Item>


          </Nav>
          </Navbar>
    )
}
