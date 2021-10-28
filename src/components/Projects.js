import React from 'react'
import { Card, Container, Col, Row, Image } from 'react-bootstrap';
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Projects() {
    return (
<Container fluid  style={{
    margin:'80px'
  }}>
  <Row>
      
    <Col xs={6} md={6}>
    <Card border="light" style={{ width: '30rem' }}>
  <Card.Img style={{maxHeight:'230px'}} variant="top" src={project1} />
  <Card.Body>
    <Card.Title>FIN - Financially Intelligent NFTs{' '}
    <a href='https://github.com/Avi-000-Avi/FIN' ><FontAwesomeIcon color='black' icon={['fab', 'github']} size="lg" /></a>
    <a href='https://100cn6kcivad9aivblkmlsb5v93taitcnuua6mc74e9sgcm4v61tvjg.siasky.net/' ><FontAwesomeIcon color='black' icon={'globe'} size="lg" /></a>
    <a href='https://showcase.ethglobal.com/ethonline2021/fin-financially-intelligent-nfts' > <FontAwesomeIcon color='black' icon={['fab', 'ethereum']} size="lg" /></a>
    </Card.Title>
    <Card.Subtitle>  Finalist in ETHOnline 2021, <br/>The Largest Ethereum Hackathon in the World <br/>
    Won Prize of $5000 from sponsors Moralis,Uniswap and Chainlink
</Card.Subtitle>
    <Card.Text>
        Built the Frontend for an NFT Protocol using React, ethers,js and hardhat. Learned dApp development with small team of 4.
    </Card.Text>
  </Card.Body>
</Card>
    </Col>
    <Col xs={6} md={6}>
    <Card border="light" style={{ width: '30rem' }}>
  <Card.Img variant="top" src={project2} />
  <Card.Body>
    <Card.Title>Bastion Games E Commerce Website

    <a href='https://github.com/rj13371/mtg-web-store' ><FontAwesomeIcon color='black' icon={['fab', 'github']} size="lg" /></a>
    <a href='https://mtgwebstore.herokuapp.com/' ><FontAwesomeIcon color='black' icon={'globe'} size="lg" /></a>
   

    </Card.Title>
    <Card.Subtitle>
      A fully fleshed out e-commerce website for a local hobby store. Uses MongoDB, NodeJS/Express and React. DB has over 30,000
      products using scryfall API. Features include user registration/authentification via email, admin dashboard including CRUD for 
      employees, event and deck registration for customers, product creation and image upload, shopping cart and checkout.  (still in development)
    </Card.Subtitle>
  </Card.Body>
</Card>
    </Col>
  </Row>
  <Row>
  <Col xs={6} md={6}>
    <Card style={{ width: '30rem' }}>
  <Card.Img variant="top" src={project3} />
  <Card.Body>
  <Card.Title>Irezumi Hub - 

<a href='https://github.com/rj13371/irezumi-hub' ><FontAwesomeIcon color='black' icon={['fab', 'github']} size="lg" /></a>
<a href='https://irezumi-hub.herokuapp.com/tattooShops' ><FontAwesomeIcon color='black' icon={'globe'} size="lg" /></a>


</Card.Title>
    <Card.Text>
      My First Express App built with help from Colt Steeles Fullstack WebDev Udemy Course. Learned the basics of NodeJS/express and MongoDB. Learned
      how to create RESTful APIs along with MVC strcuturing of code. 
    </Card.Text>
  </Card.Body>
</Card>
    </Col>
    <Col xs={6} md={6}>
    <Card style={{ width: '30rem' }}>
  <Card.Img variant="top" src={project4} />
  <Card.Body>
  <Card.Title>Rolands Crypto Exchange

<a href='https://github.com/rj13371/rolandCryptoExchange' ><FontAwesomeIcon color='black' icon={['fab', 'github']} size="lg" /></a>
<a href='https://rolandcryptoexchange.herokuapp.com/' ><FontAwesomeIcon color='black' icon={'globe'} size="lg" /></a>


</Card.Title>
    <Card.Text>
      My first ever web application. Built with Create React App and using coingecko API to retrieve cryptocurrency prices and ETH gas fees.
      Learned the basics of React and how to structure React applications. 
    </Card.Text>
  </Card.Body>
</Card>
    </Col>
  </Row>
</Container>
    )
}
