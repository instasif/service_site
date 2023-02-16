import React from 'react';
import Companies from '../../../Componants/Companies/Companies';
import Hero from '../../../Componants/Hero/Hero';
import ServiceCarousel from "../../../Componants/ServiceCarousel/ServiceCarousel";

const Home = () => {
    return (
      <div>
        <Hero />
        <Companies />
        <ServiceCarousel />
      </div>
    );
};

export default Home;