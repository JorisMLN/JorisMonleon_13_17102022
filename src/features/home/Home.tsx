import React from 'react';
import './home.scss';
import imageBanner from '../../assets/bank-tree.jpeg';
import Footer from '../../layout/footer/Footer';
import chatLogo from '../../assets/icon-chat.png';
import moneyLogo from '../../assets/icon-money.png';
import shieldLogo from '../../assets/icon-security.png';


const Home : React.FC = () => {

  return (
    <>
      <div className='home'>
        <div className='banner'>
          <img alt='logo de la banque' src={imageBanner} className='banner__image'></img>
          <div className='heroContent'>
            <p>No fees.</p>
            <p>No minimum deposit.</p>
            <p>High interest rates.</p>
            <p>Open a savings account with Argent Bank Today!</p>
          </div>
        </div>
        <div className='homeBody'>
          <div className='homeBody__item'>
            <img src={chatLogo}></img>
            <h3>You are our #1 priority</h3>
            <p>Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes. </p>
          </div>
          <div className='homeBody__item'>
            <img src={moneyLogo}></img>
            <h3>More savings means higher rates</h3>
            <p>The more you save with us, the higher your interest rate will be!</p>
          </div>
          <div className='homeBody__item'>
            <img src={shieldLogo}></img>
            <h3>Security you can trust</h3>
            <p>We use top of the line encryption to make sure your data and money is always safe. </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home;