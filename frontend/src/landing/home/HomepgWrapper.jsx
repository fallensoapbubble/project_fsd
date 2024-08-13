import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAcc from '../OpenAcc';
import Topnavbar from '../Topnavbar';
import Footer from '../Footer';

function HomepgWrapper() {
    return ( 
        <>
            <Topnavbar/>
            <Hero />
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAcc/>
            <Footer/>

        </>
     );
}

export default HomepgWrapper;