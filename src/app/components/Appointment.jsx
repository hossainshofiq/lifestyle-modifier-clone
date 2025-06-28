import React from 'react';

const Appointment = () => {
    return (
        <section className="bg-white mt-8 md:mt-28 xl:mt-24 transition-all duration-300">
            <div className="py-8 px-4 mx-auto max-w-screen-2xl sm:py-16 lg:px-6  transition-all duration-300">
                <div className="w-full p-10 shadow-lg rounded flex flex-col lg:flex-row lg:justify-between">
                    <div className="flex flex-col">
                        <span className="text-4xl">
                            চিকিৎসার জন্য আজ‌ই অ্যাপয়েন্টমেন্ট বুক করুন
                        </span>
                        <span className="text-xxl text-gray-700 my-2 mt-5">
                            •  ঔষধ মুক্ত জীবন সুস্থ জীবন, আর এর জন্য প্রয়োজন স্বাস্থ্যকর লাইফ স্টাইল।
                        </span>
                    </div>

                    <a href="https://mdabdulkaiyum.in/appointment" className="group relative inline-block  hover:scale-110 w-fit h-fit transition-transform duration-200 ease-in-out">
                        <div className="flex justify-center items-center space-x-2 bg-blue-600 hover:bg-red-500 py-3 px-5 rounded">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="w-5 h-5 text-white" fill="currentColor"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"></path></svg>
                            </div>
                            <span className="text-white">
                                Book Appointment
                            </span>
                        </div>
                    </a>

                </div>
            </div>
        </section>
    );
};

export default Appointment;