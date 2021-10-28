import React,{Fragment} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Alert,Nav, Card } from 'react-bootstrap'

export default function Skills() {
    return (
        <Fragment>
            <div style={{
    margin:'100px'
  }}>
          <Card.Title><b>Skills</b> </Card.Title>

        <FontAwesomeIcon style={{marginRight:'15px'}} icon={['fab', 'js']} size="lg" />
        <FontAwesomeIcon style={{marginRight:'15px'}} icon={['fab', 'html5']} size="lg" />
        <FontAwesomeIcon style={{marginRight:'15px'}} icon={['fab', 'css3']} size="lg" />
        <FontAwesomeIcon style={{marginRight:'15px'}} icon={['fab', 'react']} size="lg" />
        <FontAwesomeIcon style={{marginRight:'15px'}} icon={['fab', 'node-js']} size="lg" />
        <FontAwesomeIcon style={{marginRight:'15px'}} icon={['fab', 'linux']} size="lg" />
        <FontAwesomeIcon style={{marginRight:'15px'}} icon={['fab', 'github']} size="lg" />

        </div>
      </Fragment>
    )
}
