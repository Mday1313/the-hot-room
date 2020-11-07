import React from 'react';
import Hero from '../../components/layout/Hero';
import CallToAction from '../../components/layout/CallToAction';
import InfoCards from '../../components/layout/InfoCards';
import Reviews from '../../components/layout/Reviews';
import BellyBanner from '../../components/layout/BellyBanner';
import Events from '../../components/layout/Events';

const Home = () => {
    return (
        <div>
           <Hero />
           <CallToAction />
           <InfoCards />
           <Reviews />
           <BellyBanner />
           {/* <StudioInfo /> */}
           <Events />
        </div>
    )
}

export default Home;