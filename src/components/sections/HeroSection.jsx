'use client'
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

const HeroSection = () => {

    return (
        <div>
            <Carousel showThumbs={false} autoPlay={Boolean} interval={3000} infiniteLoop={true} showStatus={false}>
                <div>
                    <Image
                        src="/assets/Hero_1.jpg"
                        alt="MD ABDUL KAIYUM - Lifestyle Modifier"
                        width={1920}
                        height={1080}
                        priority={true}
                        quality={90}
                        className="w-full h-auto object-cover"
                        sizes="(max-width: 768px) 100vw, 80vw"
                        style={{
                            maxWidth: '100%',
                            height: 'auto'
                        }}
                    />
                </div>
                <div>
                    <Image
                        src="/assets/Hero_2.jpg"
                        alt="MD ABDUL KAIYUM - Lifestyle Modifier"
                        width={1920}
                        height={1080}
                        priority={true}
                        quality={90}
                        className="w-full h-auto object-cover"
                        sizes="(max-width: 768px) 100vw, 80vw"
                        style={{
                            maxWidth: '100%',
                            height: 'auto'
                        }}
                    />
                </div>
                <div>
                    <Image
                        src="/assets/Hero_3.jpg"
                        alt="MD ABDUL KAIYUM - Lifestyle Modifier"
                        width={1920}
                        height={1080}
                        priority={true}
                        quality={90}
                        className="w-full h-auto object-cover"
                        sizes="(max-width: 768px) 100vw, 80vw"
                        style={{
                            maxWidth: '100%',
                            height: 'auto'
                        }}
                    />
                </div>
            </Carousel>
        </div>
    )
}

export default HeroSection