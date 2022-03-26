import React, { useContext } from 'react'
import { Card, Container, Col, Row } from 'react-bootstrap'
import project1 from '../assets/project1.jpeg'
import project2 from '../assets/project2.jpeg'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'

import project1gif from '../assets/gif/project1.gif'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LanguageContext } from '../context/LanguageContext'
import useWindowSize from '../hooks/useWindowSize'

export default function Projects(): JSX.Element {
  const size = useWindowSize()

  const { language } = useContext(LanguageContext)

  const [projectGif1, setprojectGif1] = React.useState(false)

  return (
    <Container fluid="sm">
      <Card.Title
        style={
          size.width < 500
            ? { margin: '0px' }
            : {
                margin: '50px',
              }
        }
      >
        {' '}
        <h3>
          {' '}
          <b>{language === 'jp' ? 'プロジェクト' : 'Projects'} </b>{' '}
        </h3>{' '}
      </Card.Title>

      <Row>
        <Col style={{ padding: '5%' }} md={6}>
          <Card
            style={{
              maxWidth: '640px',
              maxHeight: '700px',
              minWidth: '372px',
              minHeight: '300px',
            }}
            border="secondary"
          >
            <Card.Img
              alt="frontpage of Financially Intelligent NFTs react app"
              style={{
                maxWidth: '640px',
                maxHeight: '290px',
                minWidth: '372px',
                minHeight: '190px',
              }}
              variant="top"
              src={projectGif1 ? project1gif : project1}
              onMouseEnter={() => setprojectGif1(true)}
              onMouseLeave={() => setprojectGif1(false)}
            />

            <Card.Body>
              <Card.Title>
                <a
                  aria-label="website link for FIN project"
                  target="_blank"
                  rel="noreferrer"
                  href="https://100cn6kcivad9aivblkmlsb5v93taitcnuua6mc74e9sgcm4v61tvjg.siasky.net/"
                >
                  {' '}
                  <h3>
                    {' '}
                    <b> FIN - Financially Intelligent NFTs</b>{' '}
                  </h3>{' '}
                </a>
                <h4>
                  {' '}
                  <b> Tech Stack</b>{' '}
                  <FontAwesomeIcon
                    style={{ marginRight: '15px' }}
                    icon={['fab', 'js']}
                    size="sm"
                  />
                  <FontAwesomeIcon
                    style={{ marginRight: '15px' }}
                    icon={['fab', 'html5']}
                    size="sm"
                  />
                  <FontAwesomeIcon
                    style={{ marginRight: '15px' }}
                    icon={['fab', 'css3']}
                    size="sm"
                  />
                  <FontAwesomeIcon
                    style={{ marginRight: '15px' }}
                    icon={['fab', 'react']}
                    size="sm"
                  />
                  <FontAwesomeIcon
                    style={{ marginRight: '15px' }}
                    icon={['fab', 'ethereum']}
                    size="sm"
                  />{' '}
                </h4>{' '}
                <a
                  aria-label="github link for FIN project"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Avi-000-Avi/FIN"
                >
                  <FontAwesomeIcon
                    style={{ marginRight: '30px' }}
                    color="black"
                    icon={['fab', 'github']}
                    size="2x"
                  />
                </a>
                <a
                  aria-label="website link for FIN project"
                  target="_blank"
                  rel="noreferrer"
                  href="https://100cn6kcivad9aivblkmlsb5v93taitcnuua6mc74e9sgcm4v61tvjg.siasky.net/"
                >
                  <FontAwesomeIcon
                    style={{ marginRight: '30px' }}
                    color="black"
                    icon={'globe'}
                    size="2x"
                  />
                </a>
                <a
                  aria-label="website link for ETHONLINE 2021"
                  target="_blank"
                  rel="noreferrer"
                  href="https://showcase.ethglobal.com/ethonline2021/fin-financially-intelligent-nfts"
                >
                  <FontAwesomeIcon
                    color="black"
                    icon={['fab', 'ethereum']}
                    size="2x"
                  />
                </a>
              </Card.Title>
              <Card.Subtitle>
                {' '}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://showcase.ethglobal.com/ethonline2021/fin-financially-intelligent-nfts"
                >
                  {' '}
                  {language === 'jp'
                    ? 'ETHOnline 2021のファイナリスト🏆'
                    : 'ETHOnline 2021 Hackathon Sponsorship Finals 🏆'}{' '}
                </a>{' '}
                <br />
                {language === 'jp'
                  ? '1000人以上が参加した世界最大のイーサリアムハッカソンで、スポンサーのMoralis、Uniswap、Chainlinkから5000ドルの賞金を獲得しました。FINは、ユーザーが、最大利益または最大損失の価格パラメータに基づいて自動的に売られる暗号通貨のポジションを購入するためのプラットフォームです。Decentralizd FinanceとNFTの力を組み合わせています。React、ethers.js、hardhatを使用してフロントエンドを構築しました。4人のチームでdApp開発を学びました。'
                  : 'The Largest Ethereum Hackathon in the World with over 1000 entrants , Won Prize of $5000 from Sponsors Moralis, Uniswap and Chainlink. FIN is a platform for users to purchase positions on cryptocurrencies that are automated to sell based on a max profit or stop loss price parameter. Combines the power of Decentralizd Finance along with NFTs. Built the Frontend using React, ethers.js and hardhat. Learned dApp development with team of 4.'}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ padding: '5%' }} md={6}>
          <Card
            style={{
              maxWidth: '640px',
              maxHeight: '700px',
              minWidth: '372px',
              minHeight: '300px',
              marginBottom: '10px',
            }}
            border="secondary"
          >
            <Card.Img
              alt="frontpage of Bastion Games E commerce MERN app"
              style={{
                maxWidth: '640px',
                maxHeight: '290px',
                minWidth: '372px',
                minHeight: '190px',
              }}
              variant="top"
              src={project2}
            />

            <Card.Body>
              <Card.Title>
                {' '}
                <a
                  aria-label="website link for Bastion Games e commerce website project"
                  target="_blank"
                  rel="noreferrer"
                  href="https://mtgwebstore.herokuapp.com/"
                >
                  <h3>
                    {' '}
                    <b> Bastion Games E Commerce Website </b> <br />{' '}
                  </h3>{' '}
                </a>
                <h4>
                  {' '}
                  <b> Tech Stack</b>{' '}
                  <FontAwesomeIcon
                    style={{ marginRight: '15px' }}
                    icon={['fab', 'js']}
                    size="sm"
                  />
                  <FontAwesomeIcon
                    style={{ marginRight: '15px' }}
                    icon={['fab', 'html5']}
                    size="sm"
                  />
                  <FontAwesomeIcon
                    style={{ marginRight: '15px' }}
                    icon={['fab', 'css3']}
                    size="sm"
                  />
                  <FontAwesomeIcon
                    style={{ marginRight: '15px' }}
                    icon={['fab', 'react']}
                    size="sm"
                  />
                  <FontAwesomeIcon
                    style={{ marginRight: '15px' }}
                    icon={['fab', 'node-js']}
                    size="sm"
                  />{' '}
                </h4>{' '}
                <a
                  aria-label="github link for Bastion Games e commerce website project"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/rj13371/mtg-web-store"
                >
                  <FontAwesomeIcon
                    style={{ marginRight: '30px' }}
                    color="black"
                    icon={['fab', 'github']}
                    size="2x"
                  />
                </a>
                <a
                  aria-label="website link for Bastion Games e commerce website project"
                  target="_blank"
                  rel="noreferrer"
                  href="https://mtgwebstore.herokuapp.com/"
                >
                  <FontAwesomeIcon color="black" icon={'globe'} size="2x" />
                </a>
              </Card.Title>
              <Card.Subtitle>
                {language === 'jp'
                  ? '地元のホビーショップのための、完全なeコマースサイトです。MongoDB、NodeJS/Express、Reactを使用しています。DBには、scryfall APIを使った3万点以上の商品が登録されています。機能としては、電子メールによるユーザー登録/認証、すべての商品、イベント、デッキのCRUDを含む管理ダッシュボードがあります。顧客のイベントやデッキの登録、商品の作成、画像のアップロード、チェックアウト。FE/BEでは、他の2人のソフトウェアエンジニアの友人と一緒に作業しました。👍 (まだ開発中です。ユーザー：RolandM、パスワード：Roland1でログインしてください。)'
                  : ' A fully fleshed out e-commerce website for a local hobby store. Uses MongoDB, NodeJS/Express and React. DB has over 30,000 products using scryfall API. Features include user registration/verification via email, admin dashboard including CRUD for all products, events, and decks. Event and deck registration for customers, product creation, image upload and checkout. Worked on FE/BE with two other software engineer friends.  👍  (still in development, login with user: RolandM pw: Roland1)'}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col style={{ padding: '5%' }} md={6}>
          <Card
            style={{
              maxWidth: '640px',
              maxHeight: '700px',
              minWidth: '372px',
              minHeight: '574px',
              marginBottom: '10px',
            }}
            border="secondary"
          >
            <Card.Img
              alt="frontpage of will3 app"
              style={{
                maxWidth: '640px',
                maxHeight: '290px',
                minWidth: '372px',
                minHeight: '190px',
              }}
              variant="top"
              src={project3}
            />

            <Card.Body>
              <Card.Title>
                {' '}
                <a
                  aria-label="website link for will3"
                  target="_blank"
                  rel="noreferrer"
                  href="https://will3.surge.sh/"
                >
                  {' '}
                  <h3>
                    {' '}
                    <b> Will 3 </b> <br />{' '}
                  </h3>{' '}
                </a>
                <h4>
                  {' '}
                  <b> Tech Stack</b>{' '}
                  <FontAwesomeIcon
                    style={{ marginRight: '15px' }}
                    icon={['fab', 'js']}
                    size="sm"
                  />
                  <FontAwesomeIcon
                    style={{ marginRight: '15px' }}
                    icon={['fab', 'html5']}
                    size="sm"
                  />
                  <FontAwesomeIcon
                    style={{ marginRight: '15px' }}
                    icon={['fab', 'css3']}
                    size="sm"
                  />
                  <FontAwesomeIcon
                    style={{ marginRight: '15px' }}
                    icon={['fab', 'react']}
                    size="sm"
                  />
                  <FontAwesomeIcon
                    style={{ marginRight: '15px' }}
                    icon={['fab', 'ethereum']}
                    size="sm"
                  />{' '}
                </h4>{' '}
                <a
                  aria-label="github link for will3"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/rj13371/will3"
                >
                  <FontAwesomeIcon
                    style={{ marginRight: '30px' }}
                    color="black"
                    icon={['fab', 'github']}
                    size="2x"
                  />
                </a>
                <a
                  aria-label="website link for will3"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/watch?v=UpJHjKE8p-o"
                >
                  <FontAwesomeIcon
                    color="black"
                    icon={['fab', 'youtube']}
                    size="2x"
                  />
                </a>
              </Card.Title>
              <Card.Subtitle style={{ padding: 20 }}>
                {language === 'jp'
                  ? 'Will3は、スマートコントラクトの集合体で、終活のための信頼できない遺言執行人として機能します。あなたの死後、あらかじめ決められた資産をあなたの指定した支援者に分配します。AVAX Moralis Hackathon 2022のために@yambo_ethと@gige_ethと一緒に作りました。React、Solidity、Antd、Scaffold ETH、AVAXチェーンで作られました。'
                  : ' Will3 is a collection of smart contracts that acts as a trustless executor for your end-of-life estate planning. It disburses predetermined assets to your designated benefactors in the event of your death. Built for AVAX Moralis Hackathon 2022 with @yambo_eth and @ginge_eth. Made with React, Solidity, Antd, Scaffold ETH and AVAX chain.  '}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{ padding: '5%' }} md={6}>
          <Card
            style={{
              maxWidth: '640px',
              maxHeight: '700px',
              minWidth: '372px',
              minHeight: '300px',
              marginBottom: '10px',
            }}
            border="secondary"
          >
            <Card.Img
              alt="frontpage of donation-DAO"
              style={{
                maxWidth: '640px',
                maxHeight: '290px',
                minWidth: '372px',
                minHeight: '190px',
              }}
              variant="top"
              src={project4}
            />
            <Card.Body>
              <Card.Title>
                {' '}
                <a
                  aria-label="website link for donation-DAO"
                  target="_blank"
                  rel="noreferrer"
                  href="https://showcase.ethglobal.com/roadtoweb3/donation-dao"
                >
                  {' '}
                  <h3>
                    {' '}
                    <b>Donation-DAO</b> <br />{' '}
                  </h3>
                </a>
                <h4>
                  {' '}
                  <b> Tech Stack</b>{' '}
                  <FontAwesomeIcon
                    style={{ marginRight: '15px' }}
                    icon={['fab', 'js']}
                    size="sm"
                  />
                  <FontAwesomeIcon
                    style={{ marginRight: '15px' }}
                    icon={['fab', 'html5']}
                    size="sm"
                  />
                  <FontAwesomeIcon
                    style={{ marginRight: '15px' }}
                    icon={['fab', 'css3']}
                    size="sm"
                  />
                  <FontAwesomeIcon
                    style={{ marginRight: '15px' }}
                    icon={['fab', 'react']}
                    size="sm"
                  />
                  <FontAwesomeIcon
                    style={{ marginRight: '15px' }}
                    icon={['fab', 'ethereum']}
                    size="sm"
                  />{' '}
                </h4>{' '}
                <a
                  aria-label="github link for donation-DAO"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/rj13371/DonationDAO"
                >
                  <FontAwesomeIcon
                    style={{ marginRight: '30px' }}
                    color="black"
                    icon={['fab', 'github']}
                    size="2x"
                  />
                </a>
                <a
                  aria-label="website link for donation-DAO"
                  target="_blank"
                  rel="noreferrer"
                  href="https://donation-dao.com/"
                >
                  <FontAwesomeIcon color="black" icon={'globe'} size="2x" />
                </a>
              </Card.Title>
              <Card.Subtitle>
                {language === 'jp'
                  ? 'Donation-DAOは、Web2の検閲を気にすることなく、草の根運動や友人・家族、あるいは自分自身のために資金調達を行いたい人々のための分散型プラットフォームです。フロントエンドでは、ユーザーが募金内容を説明した募金ページを作成し、そのページを公開することで、dAppで簡単に募金を受け取れるようウォレットを設定することができます。IPFS、Moralis、Polygon、Material UI、Reactを使用して構築しました。RoadtoWeb3 Hackathon 2022のためにソロで構築。'
                  : ' Donation-DAO is a decentralized platform for people who wish to fundraise for grassroots causes, friends/family or themselves without worrying about Web2 censorship. The Frontend allows users to create Donation Pages with descriptions on what they are fundraising for, then it will be publicly posted with their wallet setup to receive donations on the dApp easily. Built using IPFS, Moralis, Polygon, Material UI and React. Built solo for RoadtoWeb3 Hackathon 2022.'}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
