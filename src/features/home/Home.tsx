import React from 'react';
import './home.scss';
import imageBanner from '../../assets/bank-tree.jpeg';
import Footer from '../../layout/footer/Footer';

const Home : React.FC = () => {

  return (
    <>
      <div className='home'>
        <div className='banner'>
          <img alt='logo de la banque' src={imageBanner} className='banner__image'></img>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home;