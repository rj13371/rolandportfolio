import React from 'react'

import { Card } from 'react-bootstrap';

export default function Text(props) {
    return (
<Card  style={{
    margin:'100px'
  }} >
  <Card.Body>{props.text}</Card.Body>
</Card>
    )
}
