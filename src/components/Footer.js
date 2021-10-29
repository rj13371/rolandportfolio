import React,{useContext} from 'react'
import { Nav, Navbar } from 'react-bootstrap'

    import { LanguageContext } from '../context/LanguageContext';


export default function Footer() {

    const {language} = useContext(LanguageContext)

    return (
        <Navbar bg="dark" variant="dark" sticky="bottom" >
        <Nav className="justify-content-start">
  
          <Nav.Item>
            
          <Nav.Link>Created by Roland Matheson </Nav.Link>
  
          </Nav.Item>


          <Nav.Item>
            
          <Nav.Link>           {' '}          {' '}          {' '} </Nav.Link>
  
          </Nav.Item>

          <Nav.Item>
            
          <Nav.Link>{language === 'jp' ? 'CloudflareとHerokuでホスト' :  'Hosted on Cloudflare and Heroku'   }  </Nav.Link>
  
          </Nav.Item>


          </Nav>
          </Navbar>
    )
}
