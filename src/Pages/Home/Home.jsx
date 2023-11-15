import React from 'react';
import BannerCarousel from './BannerCarousel';
import AboutUs from './AboutUs';
import Statistics from './Statistics';
import ManagingCommitte from './ManagingCommitte';

const Home = () => {
    return (
        <div>
  
            <BannerCarousel/>
            <div className='container mx-auto'>
            <AboutUs/>
            <Statistics/>
            <ManagingCommitte/>
            </div>
        </div>
    );
};

export default Home;