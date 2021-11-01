import './App.css';
import React, {useContext} from 'react';
import VisibilityComponent from './components/VisibilityComponent';
import ChangeLanguage from './components/ChangeLanguage';
import Text from './components/Text';
import Image from 'react-bootstrap/Image'
import profile from './assets/profile.jpeg'
import Projects from './components/Projects';
import { Fragment } from 'react';
import Skills from './components/Skills';
import Socials from './components/Socials';
import initFontAwesome from './icons/fontAwesomeConfig';
import Footer from './components/Footer';
import { LanguageContext } from './context/LanguageContext';



initFontAwesome();



function App() {

  const {t} = useContext(LanguageContext)

  return (
    <Fragment>
    <div className="App">
    <ChangeLanguage />

<VisibilityComponent children={<Fragment> <h1  style={{
    padding:'100px'
  }} >{t('Hello👋, my name is Roland Matheson')}  <br/> <Socials/> </h1> <Image loading='lazy' style={profile ? null : { display: 'none' }} alt='profile picture of Roland' style={{width:'200px'}} src={profile} roundedCircle/> </Fragment>} />

<VisibilityComponent children={ <h2  style={{
    padding:'100px',
  }} ><b>{t('a Junior Fullstack Web Developer')} </b> </h2> } />


<VisibilityComponent children={<Text text={`I am a self taught Fullstack Web Developer since April 2021 currently learning the MERN tech stack. In January of 2021 I graduated with a Bachelors in Political Science but decided to learn software development after wanting to pursue a career as a software engineer. 
While im not programming I enjoy travelling, playing card games and listening to 80's Japanese pop hits. 
`} />} />



<VisibilityComponent children={ <Skills/>} />





 <VisibilityComponent children={ <Projects/>} />



    </div>
    <Footer/>

    </Fragment>
  );
}

export default App;
