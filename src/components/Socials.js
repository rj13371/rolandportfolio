import React,{Fragment} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Alert,Nav } from 'react-bootstrap'

export default function Socials() {
    return (
        <Fragment>
            <a href='https://github.com/rj13371'><FontAwesomeIcon color='black' style={{marginRight:'15px'}} icon={['fab', 'github']} size="lg" /></a>
            <a href='https://www.linkedin.com/in/roland-matheson-b37a09224/'><FontAwesomeIcon color='black' style={{marginRight:'15px'}} icon={['fab', 'linkedin']} size="lg" /></a>
            <a href='https://rolandmatheson.medium.com/'><FontAwesomeIcon color='black' style={{marginRight:'15px'}} icon={['fab', 'medium']} size="lg" /></a>
            <a href='mailto:rolandmathesondev@gmail.com'><FontAwesomeIcon color='black' style={{marginRight:'15px'}} icon={'envelope'} size="lg" /></a>
        

      </Fragment>
    )
}
