import React from 'react';
import Hero from '../../components/layout/Hero';
import CallToAction from '../../components/layout/CallToAction';
import InfoCards from '../../components/layout/InfoCards';
import Reviews from '../../components/layout/Reviews';
import BellyBanner from '../../components/layout/BellyBanner';

const Home = () => {
    return (
        <div>
           <Hero />
           <CallToAction />
           <InfoCards />
           <Reviews />
           <BellyBanner />
        </div>
    )
}

export default Home;