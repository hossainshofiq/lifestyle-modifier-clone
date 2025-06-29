import React from 'react';

const Videos = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
            {/* Video 1 */}
            <iframe 
                className='w-full h-[344px]' 
                src="https://www.youtube.com/embed/vMc7euF67lg" 
                title="আমার সুস্থ হওয়ার গল্প | আমি যেভাবে ওজন কমিয়ে সুস্থ হলাম | অতিরিক্ত ওজন কমানোর উপায় |" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
            ></iframe>

            {/* Video 2 */}
            <iframe 
                className='w-full h-[344px]' 
                src="https://www.youtube.com/embed/pj_bVgANAxg" 
                title="কিডনি ফেলিয়ার রোগী ডায়ালিসিস থেকে বাঁচতে ভিডিওটি দেখুন। স্টপ ডায়ালাইসিস।" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
            ></iframe>

            {/* Video 3 */}
            <iframe 
                className='w-full h-[344px]' 
                src="https://www.youtube.com/embed/VW97dpklud4" 
                title="এক মাসের চিকিৎসায় সম্পূর্ণ ডায়াবেটিস মুক্ত হয়ে বিদায় নিলাম | diabetes reverse | MD ABDUL KAIYUM" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
            ></iframe>

            {/* Video 4 */}
            <iframe 
                className='w-full h-[344px]' 
                src="https://www.youtube.com/embed/J6lpzQyEeSA" 
                title="heart attack symptoms | হার্ট অ্যাটাক হলে কি করবে | হার্ট অ্যাটাক এর লক্ষন  || PeaceLibrary" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
            ></iframe>

            {/* Video 5 */}
            <iframe 
                className='w-full h-[344px]' 
                src="https://www.youtube.com/embed/EF7MDeZbS84" 
                title="আমাদের চিকিৎসাকে জাদুর সঙ্গে তুলনা | জাদু না চিকিৎসা | PeaceLibrary" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
            ></iframe>

            {/* Video 6 */}
            <iframe 
                className='w-full h-[344px]' 
                src="https://www.youtube.com/embed/hOcppdlW6DM" 
                title="Diabetes reverse | ডায়াবেটিস থেকে মুক্তির গল্প ও উপহার নিয়ে উপস্থিত | ফিরে আসার গল্প| PeaceLibrary" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Videos;