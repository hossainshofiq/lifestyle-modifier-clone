// import React from 'react';
// import { AiFillPlusSquare } from "react-icons/ai";

// const LifeStyle = () => {
//     return (
//         <div className='my-8 px-4 mx-auto max-w-screen=2xl sm:py-16 lg:px-6 transition-all duration-300'>
//             <div className='flex justify-center items-center text-2xl font-semibold'>
//                 <h1 className='mt-3 mb-5'>স্বাস্থ্যকর লাইফস্টাইল </h1>
//                 <AiFillPlusSquare className='ml-2 text-blue-600 text-3xl'></AiFillPlusSquare>
//             </div>
//             <div className="max-w-screen-xl m-auto items-center grid lg:grid-cols-2 gap-2">
//                 <div className="m-auto w-96 border border-gray-200 rounded shadow-md p-5 mt-5 md:mt-0">

//                 </div>
//                 <div className="border border-gray-200 rounded shadow-md p-5 mt-5 md:mt-0">
//                     <div>
//                         <h1 className='text-3xl text-gray-700 font-bold mb-2'>স্বাস্থ্যকর লাইফস্টাইল</h1>
//                         <h3 className='font-bold mb-2'>কি আছে আমাদের লাইফ স্টাইলে? কেন ভাল হয়ে যায় লাইফ স্টাইল ও লাইফ টাইম ডিসিস গুলো। (সুস্থতার মূল মন্ত্রে সবচেয়ে গুরুত্বপূর্ণ যে বিষয়টি তা হল খাদ্যাভ্যাস)</h3>
//                         <ul className='mb-2'>
//                             <li>১ আমরা স্বাস্থ্যকর খাদ্য খেতে বলি।</li>
//                             <li>২ আমরা রোযা রাখতে বলি।</li>
//                             <li>৩ আমরা ভালো ঘুমাতে বলি।</li>
//                             <li>৪ আমরা দৈনিক ব্যায়াম করতে বলি।</li>
//                             <li>৫ আমরা মানসিক প্রশান্তির চর্চা করতে বলি।</li>
//                         </ul>

//                         <h4 className='font-bold'>‘সুস্থতা সৃষ্টিকর্তার নেয়ামত সুতরাং তাকে ধরে রাখুন’</h4>
//                         <h4>জেনে রাখবেন</h4>
//                         <h4 className='font-bold'>“দুর্বল মুমিনের চেয়ে শক্তিশালী মুমিন উত্তম”</h4>
//                         <h4 className='font-bold'>“মানুষ বড়ই আশ্চর্যজনক ও বোকা”</h4>
//                         <h4 className='mb-2'>সে সম্পদ অর্জন করতে গিয়ে স্বাস্থ্য হারায়।<br />তারপর আবার সেই স্বাস্থ্য ফিরে পেতে সম্পদ নষ্ট করে।<br />নিজেকে ভালোবাসুন, নিজেকে সময় দিন। আপনার স্বাস্থ্য‌ই আপনার সম্পদ, একথা বুঝে নিন।</h4>
//                         <h4>“স্বাস্থ্যকর লাইফস্টাইল সুস্থ জীবন” “হয়তো ডিসিপ্লিন নয়তো ডিসিস” আপনার লাইফস্টাইল মডিফিকেশন করতে পরামর্শ নিন লাইফস্টাইল মডিফায়ার <a className='text-blue-500' href="https://www.facebook.com/mdabdulkaiyumpeacelibrary/" target='_blank'>আব্দুল কাইয়ুম পীস লাইব্রেরী</a> এর কাছে।</h4>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LifeStyle;

import React from 'react';
import { AiFillPlusSquare } from "react-icons/ai";
import Image from 'next/image';

const LifeStyle = () => {
    const lifestyleTips = [
        "আমরা স্বাস্থ্যকর খাদ্য খেতে বলি।",
        "আমরা রোযা রাখতে বলি।",
        "আমরা ভালো ঘুমাতে বলি।",
        "আমরা দৈনিক ব্যায়াম করতে বলি।",
        "আমরা মানসিক প্রশান্তির চর্চা করতে বলি।"
    ];

    const quotes = [
        {
            text: "‘সুস্থতা সৃষ্টিকর্তার নেয়ামত সুতরাং তাকে ধরে রাখুন’",
            bold: true
        },
        {
            text: "জেনে রাখবেন",
            bold: false
        },
        {
            text: "“দুর্বল মুমিনের চেয়ে শক্তিশালী মুমিন উত্তম”",
            bold: true
        },
        {
            text: "“মানুষ বড়ই আশ্চর্যজনক ও বোকা”",
            bold: true
        },
        {
            text: "সে সম্পদ অর্জন করতে গিয়ে স্বাস্থ্য হারায়।\nতারপর আবার সেই স্বাস্থ্য ফিরে পেতে সম্পদ নষ্ট করে।\nনিজেকে ভালোবাসুন, নিজেকে সময় দিন। আপনার স্বাস্থ্য‌ই আপনার সম্পদ, একথা বুঝে নিন।",
            bold: false
        }
    ];

    return (
        <div className='my-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 transition-all duration-300'>
            {/* Section Header */}
            <div className='flex justify-center items-center mb-8'>
                <h1 className='text-2xl md:text-3xl font-semibold text-gray-800'>
                    স্বাস্থ্যকর লাইফস্টাইল
                </h1>
                <AiFillPlusSquare className='ml-2 text-blue-600 text-3xl' />
            </div>

            {/* Content Grid */}
            <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-6 md:gap-8">
                {/* Image Section */}
                <div className="mx-auto w-full max-w-md border border-gray-200 rounded-lg shadow-md overflow-hidden">
                    <div className="relative h-64 w-full">
                        <Image
                            src="/assets/images/healthy-lifestyle.jpg" // Replace with your image path
                            alt="স্বাস্থ্যকর লাইফস্টাইল"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Text Content Section */}
                <div className="border border-gray-200 rounded-lg shadow-md p-6">
                    <div className="space-y-4">
                        <h1 className='text-2xl md:text-3xl font-bold text-gray-800'>
                            স্বাস্থ্যকর লাইফস্টাইল
                        </h1>

                        <h3 className='font-semibold text-gray-700'>
                            কি আছে আমাদের লাইফ স্টাইলে? কেন ভাল হয়ে যায় লাইফ স্টাইল ও লাইফ টাইম ডিসিস গুলো। (সুস্থতার মূল মন্ত্রে সবচেয়ে গুরুত্বপূর্ণ যে বিষয়টি তা হল খাদ্যাভ্যাস)
                        </h3>

                        <ul className='space-y-2 list-decimal list-inside text-gray-700'>
                            {lifestyleTips.map((tip, index) => (
                                <li key={index}>{tip}</li>
                            ))}
                        </ul>

                        <div className="space-y-3">
                            {quotes.map((quote, index) => (
                                <p
                                    key={index}
                                    className={`${quote.bold ? 'font-bold' : ''} text-gray-700 whitespace-pre-line`}
                                >
                                    {quote.text}
                                </p>
                            ))}
                        </div>

                        <p className="text-gray-700">
                            "স্বাস্থ্যকর লাইফস্টাইল সুস্থ জীবন" "হয়তো ডিসিপ্লিন নয়তো ডিসিস" আপনার লাইফস্টাইল মডিফিকেশন করতে পরামর্শ নিন লাইফস্টাইল মডিফায়ার{' '}
                            <a
                                className='text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium'
                                href="https://www.facebook.com/mdabdulkaiyumpeacelibrary/"
                                target='_blank'
                            >
                                আব্দুল কাইয়ুম পীস লাইব্রেরী
                            </a>{' '}
                            এর কাছে।
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LifeStyle;