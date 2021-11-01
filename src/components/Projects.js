import React,{useContext} from 'react'
import { Card, Container, Col, Row } from 'react-bootstrap';
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'

import project1gif from '../assets/gif/project1.gif'
import project2gif from '../assets/gif/project2.gif'
import project3gif from '../assets/gif/project3.gif'
import project4gif from '../assets/gif/project4.gif'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LanguageContext } from '../context/LanguageContext';
import useWindowSize from '../hooks/useWindowSize';

export default function Projects() {
  const size = useWindowSize()
      
      const {language} = useContext(LanguageContext)


  const [projectGif1, setprojectGif1] = React.useState(false)
  const [projectGif2, setprojectGif2] = React.useState(false)
  const [projectGif3, setprojectGif3] = React.useState(false)
  const [projectGif4, setprojectGif4] = React.useState(false)

    return (
<Container  fluid='xs'>
<Card.Title style={size.width<500? {margin:'0px'} : {
    margin:'50px'
  }} > <h3>  <b>{language === 'jp' ? 'プロジェクト' : 'Projects' } </b>  </h3>  </Card.Title> 

  <Row>
      
    <Col  md={6}>
    <Card style={{ maxWidth:'640px', maxHeight:'700px', minWidth:'372px', minHeight:'184px'}} border="light" >
    <Card.Img alt='frontpage of Financially Intelligent NFTs react app' style={{maxWidth:'640px', maxHeight:'290px', minWidth:'372px', minHeight:'174px'}} variant="top" src={ projectGif1? project1gif : project1} onMouseEnter={() => setprojectGif1(true)} onMouseLeave={()=> setprojectGif1(false) } />
 
  <Card.Body>
    <Card.Title> <h3>  <b> FIN - Financially Intelligent NFTs</b>{' '} {' '} </h3>  
    <a aria-label="github link for FIN project" href='https://github.com/Avi-000-Avi/FIN' ><FontAwesomeIcon style={{marginRight:'30px'}} color='black' icon={['fab', 'github']} size="lg" /></a>
    <a aria-label="website link for FIN project" href='https://100cn6kcivad9aivblkmlsb5v93taitcnuua6mc74e9sgcm4v61tvjg.siasky.net/' ><FontAwesomeIcon style={{marginRight:'30px'}} color='black' icon={'globe'} size="lg" /></a>
    <a aria-label="website link for ETHONLINE 2021" href='https://showcase.ethglobal.com/ethonline2021/fin-financially-intelligent-nfts' ><FontAwesomeIcon color='black' icon={['fab', 'ethereum']} size="lg" /></a>
    </Card.Title>
    <Card.Subtitle> <a href='https://showcase.ethglobal.com/ethonline2021/fin-financially-intelligent-nfts'> {language === 'jp'? 'ETHOnline 2021のファイナリスト🏆': 'ETHOnline 2021 Hackathon Sponsorship Finals 🏆'  } </a> <br/>
    {language === 'jp' ? "世界最大のイーサリアムハッカソンが スポンサーのMoralis、Uniswap、Chainlinkから5000ドルの賞金を獲得し、 FINは、ユーザーが最大利益またはストップロス価格パラメーターに基づいて販売するように自動化された暗号通貨でポジションを購入するためのプラットフォームです。 DecentralizdFinanceのパワーとNFTを組み合わせています。 React、ethers.js、hardhatを使用してフロントエンドを構築しました。 4人のチームでdApp開発を学びました。" : "The Largest Ethereum Hackathon in the World with over 1000 entrants , Won Prize of $5000 from Sponsors Moralis, Uniswap and Chainlink. FIN is a platform for users to purchase positions on cryptocurrencies that are automated to sell based on a max profit or stop loss price parameter. Combines the power of Decentralizd Finance along with NFTs. Built the Frontend using React, ethers.js and hardhat. Learned dApp development with team of 4."}
</Card.Subtitle>

  </Card.Body>
</Card>
    </Col>
    <Col  md={6}>
    <Card style={{maxWidth:'640px', maxHeight:'700px', minWidth:'372px', minHeight:'174px'}} border="light" >
    <Card.Img alt='frontpage of Bastion Games E commerce MERN app' style={{maxWidth:'640px', maxHeight:'290px', minWidth:'372px', minHeight:'174px'}} variant="top" src={ projectGif2? project2gif : project2} onMouseEnter={() => setprojectGif2(true)} onMouseLeave={()=> setprojectGif2(false) } />
 
  <Card.Body>
    <Card.Title> <h3>  <b> Bastion Games E Commerce Website </b> {' '}<br/> </h3>

    <a aria-label="github link for Bastion Games e commerce website project" href='https://github.com/rj13371/mtg-web-store' ><FontAwesomeIcon style={{marginRight:'30px'}} color='black' icon={['fab', 'github']} size="lg" /></a>
    <a aria-label="website link for Bastion Games e commerce website project" href='https://mtgwebstore.herokuapp.com/' ><FontAwesomeIcon color='black' icon={'globe'} size="lg" /></a>
   

    </Card.Title>
    <Card.Subtitle>
    {language === 'jp' ? "地元のホビーショップ向けの完全に肉付けされたeコマースウェブサイト。MongoDB、NodeJS / Express、Reactを使用します。DBには、scryfallAPIを使用した30,000を超える製品があります。機能には、電子メールによるユーザー登録/確認、従業員向けのCRUDを含む管理ダッシュボード、顧客向けのイベントとデッキの登録、製品の作成と画像のアップロード、ショッピングカートとチェックアウトが含まれます。他の2人の友人とFE / BEに取り組んです👍（まだ開発中です。ユーザーでログインしてください：RolandM pw：Roland1）" : " A fully fleshed out e-commerce website for a local hobby store. Uses MongoDB, NodeJS/Express and React. DB has over 30,000 products using scryfall API. Features include user registration/verification via email, admin dashboard including CRUD for all products, events, and decks. Event and deck registration for customers, product creation, image upload and checkout. Worked on FE/BE with two other software engineer friends.  👍  (still in development, login with user: RolandM pw: Roland1)"}
     
    </Card.Subtitle>
  </Card.Body>
</Card>
    </Col>
  </Row>
  <Row>
  <Col  md={6}>
    <Card style={{maxWidth:'640px', maxHeight:'700px', minWidth:'372px', minHeight:'174px'}} border="light" >
    <Card.Img alt='frontpage of irezumi hub express app' style={{maxWidth:'640px', maxHeight:'290px', minWidth:'372px', minHeight:'174px'}} variant="top" src={ projectGif3? project3gif : project3} onMouseEnter={() => setprojectGif3(true)} onMouseLeave={()=> setprojectGif3(false) } />
 
  <Card.Body>
  <Card.Title> <h3> <b> Irezumi Hub </b> {' '}<br/> </h3> 

<a aria-label="github link for irezumi hub express app project" href='https://github.com/rj13371/irezumi-hub' ><FontAwesomeIcon  style={{marginRight:'30px'}} color='black' icon={['fab', 'github']} size="lg" /></a>
<a aria-label="website link for irezumi hub express app project" href='https://irezumi-hub.herokuapp.com/tattooShops' ><FontAwesomeIcon color='black' icon={'globe'} size="lg" /></a>


</Card.Title>
    <Card.Subtitle>
    {language === 'jp' ? "CloudinaryとMapboxAPIを使用して、タトゥーパーラーを作成し、ストア情報をオンラインで検索するための日本のタトゥーアーティストとCanvasasのWebサイト。Colt Steeles Fullstack WebDevUdemyコースの助けを借りて構築された私の最初のExpressアプリ。NodeJS / expressとMongoDBの基本を学びました。コードのMVC構造化とともにRESTfulAPIを作成する方法を学びました。" : " A website for Tattoo Artists and Canvasas in Japan to create Tattoo Parlours and lookup store information online using Cloudinary and Mapbox API. My First Express App built with help from Colt Steeles Fullstack WebDev Udemy Course. Learned the basics of NodeJS/express and MongoDB. Learned how to create RESTful APIs along with MVC strcuturing of code. "}

   
    </Card.Subtitle>
  </Card.Body>
</Card>
    </Col>
    <Col  md={6}>
    <Card style={{maxWidth:'640px', maxHeight:'700px', minWidth:'372px', minHeight:'174px'}} border="light" >
    <Card.Img alt='frontpage of rolands crypto exchange react app' style={{maxWidth:'640px', maxHeight:'290px', minWidth:'372px', minHeight:'174px'}} variant="top" src={ projectGif4? project4gif : project4} onMouseEnter={() => setprojectGif4(true)} onMouseLeave={()=> setprojectGif4(false) } />
 
  <Card.Body>
  <Card.Title> <h3> <b>Rolands Crypto Exchange</b> {' '}<br/> </h3> 

<a aria-label="github link for rolands crypto exchange react project" href='https://github.com/rj13371/rolandCryptoExchange' ><FontAwesomeIcon style={{marginRight:'30px'}} color='black' icon={['fab', 'github']} size="lg" /></a>
<a aria-label="website link for rolands crypto exchange react project" href='https://rolandcryptoexchange.herokuapp.com/' ><FontAwesomeIcon color='black' icon={'globe'} size="lg" /></a>


</Card.Title>
    <Card.Subtitle>
    {language === 'jp' ? "私の最初のWebアプリケーション。Create React Appで構築され、coingeckoAPIを使用して暗号通貨の価格とETHガス料金を取得します。Reactの基本とReactアプリケーションの構造化方法を学びました。。" : " My first ever web application. Built with Create React App and using coingecko API to retrieve cryptocurrency prices and ETH gas fees. Learned the basics of React and how to structure React applications. "}

    </Card.Subtitle>
  </Card.Body>
</Card>
    </Col>
  </Row>
</Container>
    )
}
