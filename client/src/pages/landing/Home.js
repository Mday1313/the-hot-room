import React from 'react';
import Hero from '../../components/layout/Hero';
import CallToAction from '../../components/layout/CallToAction';
import InfoCards from '../../components/layout/InfoCards';
import Reviews from '../../components/layout/Reviews';
import BellyBanner from '../../components/layout/BellyBanner';
import Events from '../../components/layout/Events';
import Partners from '../../components/layout/Partners';
import StudioInfo from '../../components/layout/StudioInfo';

const Home = () => {
    return (
        <div>
           <Hero />
           <CallToAction />
           <StudioInfo />
           <BellyBanner />
         
           <InfoCards />
            <Reviews />
           <Events />
           <Partners />
        </div>
    )
}

export default Home;