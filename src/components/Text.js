import React from 'react'

import { Card } from 'react-bootstrap';

export default function Text(props) {
    return (
<Card border="light"  style={{
    marginTop:'100px',
    marginLeft:'30px',
    marginRight:'30px',
    maxWidth:'100%'
  }} >
      <Card.Title><b>About</b> </Card.Title>
  <Card.Body>{props.text}</Card.Body>
</Card>
    )
}
