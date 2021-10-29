import React,{Fragment, useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Alert,Nav, Card } from 'react-bootstrap'
import { LanguageContext } from '../context/LanguageContext';
export default function Skills() {

      
      const {t} = useContext(LanguageContext)
      

    return (
        <Fragment>
            <div style={{
    margin:'100px'
  }}>
          <Card.Title><b>{t('Skills')}</b> </Card.Title>

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
