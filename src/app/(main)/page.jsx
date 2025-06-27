import About from '@/components/sections/About';
import ContactUs from '@/components/sections/ContactUs';
import HeroSection from '@/components/sections/HeroSection';
import Review from '@/components/sections/Review';
import Services from '@/components/sections/Services';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import React from 'react';

const Home = () => {
    return (
        <div className='my-24'>
            <Image
                src="/assets/files/images/top_banner/RWUGaCKvY8qfMTboQempeTB8kcrEAZ.jpg"
                alt="Descriptive text about the banner image"
                width={1920}
                height={1080}
                priority={true}
                quality={85}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, 80vw"
            ></Image>
            <HeroSection></HeroSection>
            <Services></Services>
            <Review></Review>
            <About></About>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;