import Image from 'next/image';
import React from 'react';
import HeroSection from '../components/HeroSection';
import Review from '../components/Review';
import About from '../components/About';
import ContactUs from '../components/ContactUs';
import LifeStyle from '../components/LifeStyle';
import Appointment from '../components/Appointment';
import Services from '../components/Services';

const Home = () => {
    return (
        <div className=''>
            <Image
                src="/assets/top_banner/RWUGaCKvY8qfMTboQempeTB8kcrEAZ.jpg"
                alt="Descriptive text about the banner image"
                width={1920}
                height={1080}
                priority={true}
                quality={85}
                className="w-full h-auto object-cover mt-28"
                sizes="(max-width: 768px) 100vw, 80vw"
            ></Image>
            <HeroSection></HeroSection>
            <LifeStyle></LifeStyle>
            <Appointment></Appointment>
            <Services></Services>
            <Review></Review>
            <About></About>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;