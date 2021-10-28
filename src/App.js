import './App.css';
import VisibilityComponent from './components/VisibilityComponent';
import Text from './components/Text';
import Image from 'react-bootstrap/Image'
import profile from './assets/profile.jpeg'
import Projects from './components/Projects';
import { Fragment } from 'react';
import Skills from './components/Skills';
import Socials from './components/Socials';
import { Card } from 'react-bootstrap';

import initFontAwesome from './icons/fontAwesomeConfig';
import Footer from './components/Footer';
initFontAwesome();
function App() {
  return (
    <Fragment>
    <div className="App">

<VisibilityComponent children={<Fragment> <h1  style={{
    padding:'100px'
  }} >Hello👋, my name is <b>Roland Matheson</b> <br/> <Socials/> </h1> <Image style={{width:'200px'}} src={profile} roundedCircle/> </Fragment>} />

<VisibilityComponent children={ <h3  style={{
    padding:'100px',
  }} >a Jr. Fullstack Web Developer </h3> } />

<VisibilityComponent children={<Text text={`I am a self taught Fullstack Web Developer since April 2021 currently learning the MERN tech stack. In January of 2021 I graduated with a Bachelors in Political Science but decided to learn Software development after wanting to pursue a career as a software engineer. 
Since then I have focused mainly on Web development but my love of blockchain pushed me to enter several Ethereum hackathons, eventually becoming a finalist with team FIN. Currently I am participating in several hackathons and learning Solidity.
While im not programming I enjoy travelling, playing card games and listening to 80's Japanese pop hits. 
`} />} />

<VisibilityComponent children={ <Skills/>} />




 <VisibilityComponent children={ <Card.Title style={{
    margin:'50px'
  }} ><b>Projects</b> </Card.Title> } />
 <VisibilityComponent children={ <Projects/>} />



    </div>
    <Footer/>
    </Fragment>
  );
}

export default App;
