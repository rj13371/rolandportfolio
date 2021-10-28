import React from 'react'
import { Card, Container, Col, Row, Image } from 'react-bootstrap';
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Projects() {
    return (
<Container style={{
    margin:'20px'
  }} fluid='xs'>
  <Row>
      
    <Col  md={6}>
    <Card border="light" >
  <Card.Img style={{maxHeight:'340px'}} variant="top" src={project1} />
  <Card.Body>
    <Card.Title> <b> FIN - Financially Intelligent NFTs</b>{' '} {' '} <br/>
    <a href='https://github.com/Avi-000-Avi/FIN' ><FontAwesomeIcon color='black' icon={['fab', 'github']} size="lg" /></a>
    <a href='https://100cn6kcivad9aivblkmlsb5v93taitcnuua6mc74e9sgcm4v61tvjg.siasky.net/' ><FontAwesomeIcon color='black' icon={'globe'} size="lg" /></a>
    <a href='https://showcase.ethglobal.com/ethonline2021/fin-financially-intelligent-nfts' > <FontAwesomeIcon color='black' icon={['fab', 'ethereum']} size="lg" /></a>
    </Card.Title>
    <Card.Subtitle> <a href='https://showcase.ethglobal.com/ethonline2021/fin-financially-intelligent-nfts' >Finalist in ETHOnline 2021 🏆</a>  <br/>The Largest Ethereum Hackathon in the World <br/>
    Won Prize of $5000 from Sponsors Moralis, Uniswap and Chainlink <br/>
    Built the Frontend for an NFT Protocol using React, ethers.js and hardhat. <br/> Learned dApp development with team of 4.
</Card.Subtitle>

  </Card.Body>
</Card>
    </Col>
    <Col  md={6}>
    <Card border="light" >
  <Card.Img variant="top" src={project2} />
  <Card.Body>
    <Card.Title> <b> Bastion Games E Commerce Website </b> {' '}<br/>

    <a href='https://github.com/rj13371/mtg-web-store' ><FontAwesomeIcon color='black' icon={['fab', 'github']} size="lg" /></a>
    <a href='https://mtgwebstore.herokuapp.com/' ><FontAwesomeIcon color='black' icon={'globe'} size="lg" /></a>
   

    </Card.Title>
    <Card.Subtitle>
      A fully fleshed out e-commerce website for a local hobby store. Uses MongoDB, NodeJS/Express and React. DB has over 30,000
      products using scryfall API. Features include user registration/verification via email, admin dashboard including CRUD for 
      employees, event and deck registration for customers, product creation and image upload, shopping cart and checkout. Worked on FE/BE with two other friends 👍  (still in development)
    </Card.Subtitle>
  </Card.Body>
</Card>
    </Col>
  </Row>
  <Row>
  <Col  md={6}>
    <Card border="light" >
  <Card.Img variant="top" src={project3} />
  <Card.Body>
  <Card.Title> <b> Irezumi Hub </b> {' '}<br/>

<a href='https://github.com/rj13371/irezumi-hub' ><FontAwesomeIcon color='black' icon={['fab', 'github']} size="lg" /></a>
<a href='https://irezumi-hub.herokuapp.com/tattooShops' ><FontAwesomeIcon color='black' icon={'globe'} size="lg" /></a>


</Card.Title>
    <Card.Subtitle>
    A website for Tattoo Artists and Canvasas in Japan to create Tattoo Parlours and lookup store information online using Cloudinary and Mapbox API. 
      My First Express App built with help from Colt Steeles Fullstack WebDev Udemy Course. Learned the basics of NodeJS/express and MongoDB. Learned
      how to create RESTful APIs along with MVC strcuturing of code. 
    </Card.Subtitle>
  </Card.Body>
</Card>
    </Col>
    <Col  md={6}>
    <Card border="light" >
  <Card.Img variant="top" src={project4} />
  <Card.Body>
  <Card.Title><b>Rolands Crypto Exchange</b> {' '}<br/>

<a href='https://github.com/rj13371/rolandCryptoExchange' ><FontAwesomeIcon color='black' icon={['fab', 'github']} size="lg" /></a>
<a href='https://rolandcryptoexchange.herokuapp.com/' ><FontAwesomeIcon color='black' icon={'globe'} size="lg" /></a>


</Card.Title>
    <Card.Subtitle>
      My first ever web application. Built with Create React App and using coingecko API to retrieve cryptocurrency prices and ETH gas fees.
      Learned the basics of React and how to structure React applications. 
    </Card.Subtitle>
  </Card.Body>
</Card>
    </Col>
  </Row>
</Container>
    )
}
