import React,{Fragment} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Alert,Nav } from 'react-bootstrap'

export default function Skills() {
    return (
        <Fragment>
            <div style={{
    margin:'80px'
  }}>
            <h2>Skills</h2>

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
