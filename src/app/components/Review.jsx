import Image from 'next/image';
import React from 'react';

const Review = () => {
    return (
        <div className='max-w-3xl mx-auto my-10'>
            <div className="bg-white p-6 max-w-3xl mx-auto">
                <div className="flex flex-col items-center text-center gap-4">
                    {/* Testimonial Text */}
                    <div className="max-w-2xl">
                        <p className="text-gray-900 text-2xl mb-2 font-bold">সুখী হওয়ার গল্প</p>
                        <p className="text-gray-700 text-md font-semibold">
                            আমি এখানে আমার অতিরিক্ত ওজনের জন্য চিকিৎসা করতে এসেছিলাম। চিকিৎসা শুরু করার আগে আমার ওজন ছিল ৭৮ কেজি। চিকিৎসা শুরুর ১ মাস ২৩ দিন পরে আমার ওজন হয় ৬৬ কেজি। আমি এখন আগের থেকে অনেক ভালো ফিল করছি।
                        </p>
                    </div>
                    
                    {/* Centered Image */}
                    <div className="flex flex-col items-center mt-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden mx-auto">
                            <Image
                                src="/assets/review/Bf7Ew7H69KveB6nsEDDmsd1o0JTiJp.png"
                                alt="গুড়িয়া খাতুন"
                                width={64}
                                height={64}
                                objectFit="cover"
                                className="rounded-full"
                            />
                        </div>
                        <h3 className="text-md font-bold mt-2">গুড়িয়া খাতুন</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;