import React from 'react';
import Companies from '../../../Componants/Companies/Companies';
import Hero from '../../../Componants/Hero/Hero';
import ServiceCards from '../../../Componants/ServiceCards/ServiceCards';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Companies/>
            <ServiceCards/>
        </div>
    );
};

export default Home;