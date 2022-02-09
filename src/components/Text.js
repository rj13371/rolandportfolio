import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext';
import { Card } from 'react-bootstrap';
import resume from '../assets/gif/resume.pdf'

export default function Text(props) {
    //import { LanguageContext } from '../context/LanguageContext';
    const { t, language } = useContext(LanguageContext)
    //{t('About')}
    return (
        <Card border="light" style={{
            marginTop: '100px',
            marginLeft: '30px',
            marginRight: '30px',
            maxWidth: '100%'
        }} >
            <Card.Title> <h3> <b>{t('About')}</b> </h3>  </Card.Title>
            <Card.Body>{language === 'jp' ? "2021年4月から独学でフルスタックJavaScript開発者として勉強して、現在MERN技術スタックを学んでいます。2021年1月、政治学の学士号を取得して卒業しましたが、ソフトウェアエンジニアとしてのキャリアを追求したいと考え、ソフトウェア開発を学ぶことにしました。趣味は、旅行、トランプゲーム、80年代の日本のポップヒット曲を聴くのが好きです。" : 'I am a self taught Fullstack Web Developer since April 2021 currently learning the MERN tech stack. In January of 2021 I graduated with a Bachelors in Political Science but decided to learn software development after wanting to pursue a career as a software engineer. While im not programming I enjoy travelling, playing card games and listening to 80s Japanese Pop Hits'}
                <br /> {t('Living in 🗼Tokyo, Japan 🇯🇵 Originally from 🇨🇦')}  <br /> {t('Contact')}: <a href="mailto: rolandmathesondev@gmail.com"> rolandmathesondev@gmail.com </a> <br />
                <a href={resume} download> {language === 'jp' ? '履歴書をダウンロード' : 'Download Resume'} </a> <br />
                <a href='https://broken-sun-5506.on.fleek.co/'> {language === 'jp' ? 'ポートフォリオv2' : 'Portfolio v2'} </a>

            </Card.Body>

        </Card>
    )
}
