import React from 'react'

import { Card } from 'react-bootstrap';

export default function Text(props) {
    return (
<Card border="light"  style={{
    margin:'100px'
  }} >
      <Card.Title><b>About</b> </Card.Title>
  <Card.Body>{props.text}</Card.Body>
</Card>
    )
}
