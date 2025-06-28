'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // const services = [
    //     {
    //         id: 'diabetes',
    //         title: 'ডায়াবেটিস (সুগার)',
    //         description: 'ডায়াবেটিস, বাংলায় যা সু......',
    //         image: '/assets/services/D2adhtJHTL93ERiBSt8qApZf4HaHHb.jpg',
    //         details: `ডায়াবেটিস, বাংলায় যা সুগার নামেও পরিচিত, এটি একটি ক্রনিক (দীর্ঘমেয়াদি) স্বাস্থ্য সমস্যা যেখানে শরীরের রক্তে গ্লুকোজের পরিমাণ স্বাভাবিকের চেয়ে বেড়ে যায়। এটি মূলত ইনসুলিন নামক হরমোনের অভাব বা কার্যকারিতার অভাবে ঘটে। ডায়াবেটিসের প্রধানত তিনটি ধরন রয়েছে: 1. *টাইপ ১ ডায়াবেটিস:* এই ধরনের ডায়াবেটিসে শরীর পর্যাপ্ত ইনসুলিন উৎপাদন করতে পারে না কারণ ইমিউন সিস্টেম ইনসুলিন উৎপাদনকারী কোষগুলোকে ধ্বংস করে দেয়। এটি সাধারণত শিশু বা তরুণদের মধ্যে দেখা যায়। 2. *টাইপ ২ ডায়াবেটিস:* এটি সবচেয়ে সাধারণ ধরনের ডায়াবেটিস এবং সাধারণত প্রাপ্তবয়স্কদের মধ্যে দেখা যায়। এখানে শরীর পর্যাপ্ত ইনসুলিন উৎপাদন করতে পারলেও উৎপাদিত ইনসুলিন কার্যকরভাবে ব্যবহার করতে পারে না। 3. *গর্ভকালীন ডায়াবেটিস:* এটি গর্ভাবস্থায় ঘটে এবং সাধারণত জন্মের পর ঠিক হয়ে যায়। তবে, এটি ভবিষ্যতে টাইপ ২ ডায়াবেটিসের ঝুঁকি বাড়াতে পারে। ডায়াবেটিসের উপসর্গগুলির মধ্যে রয়েছে: - অতিরিক্ত তৃষ্ণা - ঘন ঘন প্রস্রাব - অতিরিক্ত ক্ষুধা - ক্লান্তি - ওজন হ্রাস (টাইপ ১ ডায়াবেটিসে)`
    //     },
    // ];

    const services = [
        {
            id: 'diabetes',
            title: 'ডায়াবেটিস (সুগার)',
            description: 'ডায়াবেটিস, বাংলায় যা সুগার নামেও পরিচিত...',
            image: '/assets/services/D2adhtJHTL93ERiBSt8qApZf4HaHHb.jpg',
            details: `ডায়াবেটিস হলো একটি দীর্ঘমেয়াদী রোগ যেখানে রক্তে গ্লুকোজের মাত্রা বেড়ে যায়।
ইনসুলিন হরমোনের অভাব বা অকার্যকারিতার কারণে এটি হয়।
টাইপ ১ ডায়াবেটিসে শরীর ইনসুলিন তৈরি করতে পারে না।
টাইপ ২ ডায়াবেটিসে শরীর ইনসুলিন সঠিকভাবে ব্যবহার করতে পারে না।
গর্ভকালীন ডায়াবেটিস গর্ভাবস্থায় দেখা দেয়।
প্রধান লক্ষণ: অত্যধিক তৃষ্ণা, ঘন ঘন প্রস্রাব, ক্লান্তি।
নিয়ন্ত্রণের উপায়: সঠিক খাদ্যাভ্যাস, ব্যায়াম ও ঔষধ।`
        },
        {
            id: 'hypertension',
            title: 'হাই প্রেসার (উচ্চ রক্তচাপ)',
            description: 'হাই প্রেসার বা উচ্চ রক্তচাপ...',
            image: '/assets/services/FNLvY73vGaJoIsEQdeifvfk5WvBYec.jpg',
            details: `উচ্চ রক্তচাপ হলো যখন রক্তনালীতে চাপ স্বাভাবিকের চেয়ে বেশি থাকে।
এটি নীরব ঘাতক নামে পরিচিত কারণ প্রাথমিকভাবে কোনো লক্ষণ দেখা যায় না।
প্রধান কারণ: অতিরিক্ত লবণ খাওয়া, স্থূলতা, মানসিক চাপ।
ঝুঁকি: হৃদরোগ, স্ট্রোক, কিডনি রোগের সম্ভাবনা বাড়ায়।
লক্ষণ: মাথাব্যথা, শ্বাসকষ্ট, নাক দিয়ে রক্ত পড়া।
নিয়ন্ত্রণ: ওজন কমানো, লবণ কম খাওয়া, নিয়মিত ব্যায়াম।
চিকিৎসা: ডাক্তারের পরামর্শে রক্তচাপ কমানোর ঔষধ।`
        },
        {
            id: 'obesity',
            title: 'অতিরিক্ত ওজন (স্থুলতা)',
            description: 'অতিরিক্ত ওজন বা স্থূলতা হলো এমন একটি অবস্থা...',
            image: '/assets/services/uOtRh0BL8oxJQisg0Yx934GZd2fQaZ.jpg',
            details: `স্থূলতা হলো শরীরে অতিরিক্ত চর্বি জমার ফলে ওজন বৃদ্ধি পাওয়া।
বডি মাস ইনডেক্স (BMI) ৩০ বা তার বেশি হলে স্থূলতা ধরা হয়।
প্রধান কারণ: অস্বাস্থ্যকর খাদ্যাভ্যাস, শারীরিক পরিশ্রমের অভাব।
ঝুঁকি: ডায়াবেটিস, হৃদরোগ, উচ্চ রক্তচাপের সম্ভাবনা বাড়ায়।
লক্ষণ: শ্বাসকষ্ট, জয়েন্টে ব্যথা, অতিরিক্ত ঘামা।
নিয়ন্ত্রণ: স্বাস্থ্যকর খাবার, নিয়মিত ব্যায়াম, পর্যাপ্ত ঘুম।
চিকিৎসা: ডায়েটিশিয়ানের পরামর্শ ও জীবনযাত্রার পরিবর্তন।`
        },
        {
            id: 'kidney-stones',
            title: 'কিডনিতে পাথর (কিডনি স্টোন)',
            description: 'কিডনিতে পাথর বা কিডনি স্টোন হলো কঠিন খনিজ...',
            image: '/assets/services/VygZlOwThFWFB6cko2NYANZCDjVisJ.png',
            details: `কিডনি স্টোন হলো খনিজ ও লবণের কঠিন স্ফটিক যা কিডনিতে তৈরি হয়।
প্রধান ধরন: ক্যালসিয়াম অক্সালেট, ইউরিক অ্যাসিড, স্ট্রুভাইট স্টোন।
কারণ: কম পানি পান, উচ্চ প্রোটিনযুক্ত খাবার, বংশগত প্রবণতা।
লক্ষণ: তীব্র পিঠ বা পেটে ব্যথা, প্রস্রাবে রক্ত, বমি বমি ভাব।
প্রতিরোধ: দিনে ৩-৪ লিটার পানি পান, লবণ কম খাওয়া।
পরীক্ষা: আল্ট্রাসাউন্ড, এক্স-রে বা সিটি স্ক্যান।
চিকিৎসা: মেডিকেশন, শক ওয়েভ থেরাপি বা সার্জারি।`
        },
        {
            id: 'fatty-kidney',
            title: 'ফ্যাটি কিডনি',
            description: 'ফ্যাটি কিডনি, বা রেনাল লিপোমাটোসিস...',
            image: '/assets/services/Czn7QI9FlvowDZNomMOzc03n1L1kuK.jpg',
            details: `ফ্যাটি কিডনি হলো কিডনির চারপাশে অতিরিক্ত চর্বি জমার অবস্থা।
প্রধান কারণ: স্থূলতা, উচ্চ কোলেস্টেরল, ডায়াবেটিস।
ঝুঁকি: কিডনির কার্যকারিতা হ্রাস, উচ্চ রক্তচাপ।
লক্ষণ: সাধারণত নির্দিষ্ট লক্ষণ দেখা যায় না।
নির্ণয়: আল্ট্রাসাউন্ড বা এমআরআই স্ক্যানের মাধ্যমে।
প্রতিরোধ: ওজন নিয়ন্ত্রণ, স্বাস্থ্যকর খাদ্যাভ্যাস।
চিকিৎসা: অন্তর্নিহিত কারণের চিকিৎসা ও জীবনযাত্রার পরিবর্তন।`
        },
        {
            id: 'heart-blockage',
            title: 'হার্ট ব্লকেজ',
            description: 'হার্ট ব্লকেজ (Heart blockage) মূলত হৃদপিণ্ডের...',
            image: '/assets/services/6NNFlgMkACZ451t1JoIy5eYuyrVc6f.jpg',
            details: `হার্ট ব্লকেজ হলো হৃদপিণ্ডের ধমনীতে চর্বি জমে বাধা সৃষ্টি হওয়া।
প্রধান কারণ: উচ্চ কোলেস্টেরল, উচ্চ রক্তচাপ, ধূমপান।
ঝুঁকি: হার্ট অ্যাটাক, হৃদপিণ্ডের কার্যকারিতা হ্রাস।
লক্ষণ: বুকে ব্যথা, শ্বাসকষ্ট, বাম হাতে ব্যথা।
নির্ণয়: ইসিজি, ইকোকার্ডিওগ্রাম, অ্যাঞ্জিওগ্রাম।
প্রতিরোধ: ধূমপান ত্যাগ, নিয়মিত ব্যায়াম, স্বাস্থ্যকর খাবার।
চিকিৎসা: স্টেন্টিং, বাইপাস সার্জারি বা মেডিকেশন।`
        },
        {
            id: 'triglycerides',
            title: 'ট্রাইগ্লিসারাইড (টিজি)',
            description: 'ট্রাইগ্লিসারাইড (টিজি) হল এক ধরণের ফ্যাট...',
            image: '/assets/services/MkMQw8zPFEiHmCiFH3493ZJPoK6rMg.jpg',
            details: `ট্রাইগ্লিসারাইড হলো রক্তে থাকা এক ধরনের চর্বি যা শক্তি সঞ্চয় করে।
স্বাভাবিক মাত্রা: ১৫০ mg/dL এর নিচে।
উচ্চ মাত্রার কারণ: অতিরিক্ত ক্যালরি গ্রহণ, মদ্যপান, ডায়াবেটিস।
ঝুঁকি: হৃদরোগ, স্ট্রোক, অগ্ন্যাশয়ের প্রদাহ।
লক্ষণ: সাধারণত কোনো লক্ষণ দেখা যায় না।
নিয়ন্ত্রণ: চিনি ও কার্বোহাইড্রেট কম খাওয়া, নিয়মিত ব্যায়াম।
চিকিৎসা: ডাক্তারের পরামর্শে ফাইব্রেট বা স্ট্যাটিন গ্রুপের ঔষধ।`
        },
        {
            id: 'fatty-liver',
            title: 'লিভারে চর্বি জমা (ফ্যাটি লিভার)',
            description: 'লিভারে চর্বি জমা বা ফ্যাটি লিভার হলো এমন...',
            image: '/assets/services/MoI6R7COdi08cKmcYhNJdsVPHgksz8.jpg',
            details: `ফ্যাটি লিভার হলো লিভার কোষে অতিরিক্ত চর্বি জমার অবস্থা।
দুই ধরন: অ্যালকোহলিক ও নন-অ্যালকোহলিক ফ্যাটি লিভার।
কারণ: স্থূলতা, ইনসুলিন রেজিস্ট্যান্স, অতিরিক্ত অ্যালকোহল।
ঝুঁকি: লিভার সিরোসিস, লিভার ক্যান্সার।
লক্ষণ: ডান পাঁজরের নিচে ব্যথা, ক্লান্তি, ওজন কমা।
নিয়ন্ত্রণ: ওজন কমানো, অ্যালকোহল বর্জন, নিয়মিত ব্যায়াম।
চিকিৎসা: অন্তর্নিহিত কারণের চিকিৎসা ও জীবনযাত্রার পরিবর্তন।`
        },
        {
            id: 'cholesterol',
            title: 'কোলেস্ট্রল (রক্তে চর্বি)',
            description: 'কোলেস্টেরল হলো একটি চর্বিজাতীয় পদার্থ...',
            image: '/assets/services/mROfTawuK3nSV3OiIwWeklXZ3pyeXA.jpg',
            details: `কোলেস্টেরল হলো এক ধরনের লিপিড যা শরীরের জন্য প্রয়োজনীয়।
দুই ধরন: LDL (খারাপ) ও HDL (ভাল) কোলেস্টেরল।
উচ্চ মাত্রার কারণ: অস্বাস্থ্যকর খাদ্যাভ্যাস, অলস জীবনযাপন।
ঝুঁকি: হৃদরোগ, স্ট্রোক, রক্তনালী ব্লকেজ।
লক্ষণ: সাধারণত কোনো লক্ষণ দেখা যায় না।
নিয়ন্ত্রণ: স্যাচুরেটেড ফ্যাট কম খাওয়া, নিয়মিত ব্যায়াম।
চিকিৎসা: স্ট্যাটিন গ্রুপের ঔষধ ও খাদ্যাভ্যাস পরিবর্তন।`
        },
        {
            id: 'hyperinsulinemia',
            title: 'হাইপারইনসুলিনমিয়া',
            description: 'হাইপারইনসুলিনমিয়া হলো একটি অবস্থা...',
            image: '/assets/services/JxEAumcDPCDbU86n7xHXOlDWyGHwwO.jpg',
            details: `হাইপারইনসুলিনমিয়া হলো রক্তে ইনসুলিনের মাত্রা বেড়ে যাওয়া।
প্রধান কারণ: ইনসুলিন রেজিস্ট্যান্স, টাইপ ২ ডায়াবেটিস।
ঝুঁকি: ওজন বৃদ্ধি, উচ্চ রক্তচাপ, হৃদরোগ।
লক্ষণ: ক্ষুধা বৃদ্ধি, ক্লান্তি, ওজন বৃদ্ধি।
নির্ণয়: রক্ত পরীক্ষার মাধ্যমে ইনসুলিন লেভেল দেখা।
নিয়ন্ত্রণ: লো-কার্ব ডায়েট, নিয়মিত ব্যায়াম।
চিকিৎসা: মেটফরমিন জাতীয় ঔষধ ও জীবনযাত্রার পরিবর্তন।`
        },
        {
            id: 'fatty-pancreas',
            title: 'ফ্যাটি প্যানক্রিয়াস',
            description: 'ফ্যাটি প্যানক্রিয়াস (Fatty Pancreas)...',
            image: '/assets/services/VygZlOwThFWFB6cko2NYANZCDjVisJ.png',
            details: `ফ্যাটি প্যানক্রিয়াস হলো অগ্ন্যাশয়ে চর্বি জমার অবস্থা।
প্রধান কারণ: স্থূলতা, মেটাবলিক সিনড্রোম, ডায়াবেটিস।
ঝুঁকি: ইনসুলিন উৎপাদন ব্যাহত হওয়া, ডায়াবেটিস।
লক্ষণ: সাধারণত কোনো লক্ষণ দেখা যায় না।
নির্ণয়: আল্ট্রাসাউন্ড, সিটি স্ক্যান বা এমআরআই।
নিয়ন্ত্রণ: ওজন কমানো, চর্বি ও শর্করা কম খাওয়া।
চিকিৎসা: অন্তর্নিহিত কারণের চিকিৎসা ও খাদ্যাভ্যাস পরিবর্তন।`
        }
    ];

    const openModal = (service) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedService(null);
    };

    return (
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 transition-all duration-300">
            {/* Section Header */}
            <div className="flex justify-center items-center mb-8">
                <h1 className="text-3xl font-semibold text-center text-gray-800">
                    আমাদের সেবা সমূহ
                </h1>
                <div className="hidden -mt-2 ml-2 md:flex text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className="w-10 h-10">
                        <path d="M440-120v-60h340v-304q0-123.686-87.321-209.843Q605.357-780 480-780t-212.679 86.157Q180-607.686 180-484v244h-20q-33 0-56.5-23.5T80-320v-80q0-21 10.5-39.5T120-469l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 52q19 9 29.5 27t10.5 38v92q0 20-10.5 38T840-249v69q0 24.75-17.625 42.375T780-120H440Zm-80.175-290Q347-410 338.5-418.675q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5Zm240 0Q587-410 578.5-418.675q-8.5-8.676-8.5-21.5 0-12.825 8.675-21.325 8.676-8.5 21.5-8.5 12.825 0 21.325 8.675 8.5 8.676 8.5 21.5 0 12.825-8.675 21.325-8.676 8.5-21.5 8.5ZM241-462q-7-106 64-182t177-76q87 0 151 57.5T711-519q-89-1-162.5-50T434.719-698Q419-618 367.5-555.5 316-493 241-462Z"></path>
                    </svg>
                </div>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-3 gap-8 my-5">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="flex flex-col justify-center items-center text-gray-700 shadow-md hover:scale-105 transition-all duration-200 cursor-pointer rounded-sm overflow-hidden bg-white"
                        onClick={() => openModal(service)}
                    >
                        <div className="w-full p-6">
                            <div className="flex flex-col justify-center items-center space-y-4">
                                <div className="relative w-12 h-12">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover rounded-full"
                                    />
                                </div>
                                <span className="font-semibold text-md text-center">
                                    {service.title}
                                </span>
                            </div>
                            <div className="mt-4 mb-1 text-xs">
                                {service.description}
                            </div>
                        </div>
                        <div className="w-full px-6 pb-6">
                            <button className="text-blue-600 font-semibold">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && selectedService && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 p-4">
                    <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-200">
                            <h3 className="text-2xl font-semibold text-gray-900">
                                Appointment Details
                            </h3>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6">
                            <div className="prose dark:prose-invert max-w-none">
                                {selectedService.details.split('\n').map((paragraph, i) => (
                                    <p key={i} className="mb-1">{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="flex items-center justify-start p-6 border-t border-gray-200 space-x-4">
                            <a
                                href="https://mdabdulkaiyum.in/appointment"
                                className="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800"
                            >
                                Book Appointment Now
                            </a>
                            <button
                                onClick={closeModal}
                                className="px-5 py-2.5 text-sm font-medium text-gray-900 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-500"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Services;