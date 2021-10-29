import React,{useContext} from 'react'
import { LanguageContext } from '../context/LanguageContext'
import { Button, Navbar, Container } from 'react-bootstrap'

export default function ChangeLanguage() {

    const { language, setLanguage } = useContext(LanguageContext)    

    return (

<Navbar style={{ maxWidth: '100px' }} fixed="top" variant="light" bg="light">
<Container>
{language == 'jp' ? <Button onClick={() => setLanguage("en")} variant="dark">English 🇬🇧</Button> :
            <Button onClick={() => setLanguage("jp")} variant="dark">日本語 🇯🇵 </Button>
            }
</Container>
</Navbar>
    )
}

