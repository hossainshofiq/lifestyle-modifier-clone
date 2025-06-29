import React from 'react';

const ContactUs = () => {
    return (
        <div className='max-w-4xl mx-auto px-4 py-12'>
            <h2 className='text-3xl font-bold text-center mb-8'>অনুসন্ধান করুন</h2>

            <form className='space-y-6 bg-white p-6 rounded-lg shadow-md'>
                <div className='flex flex-col md:flex-row gap-6'>
                    {/* Name Field */}
                    <div className='w-full md:w-1/2'>
                        <label htmlFor='name' className='block text-gray-700 text-xs font-medium mb-2'>
                            নামঃ <span className='text-red-500'>*</span>
                        </label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            placeholder='নাম'
                            required
                            className='w-full px-4 py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>

                    {/* Phone Field */}
                    <div className='w-full md:w-1/2'>
                        <label htmlFor='phone' className='block text-gray-700 text-xs  font-medium mb-2'>
                            নাম্বারঃ <span className='text-red-500'>*</span>
                        </label>
                        <input
                            type='tel'
                            id='phone'
                            name='phone'
                            placeholder='আপনার নাম্বার'
                            required
                            className='w-full px-4 py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                        />
                    </div>
                </div>

                {/* Email Field */}
                <div>
                    <label htmlFor='email' className='block text-gray-700 text-xs font-medium mb-2'>
                        ইমেইলঃ
                    </label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='আপনার ইমেইল'
                        className='w-full px-4 py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>

                {/* Message Field */}
                <div>
                    <label htmlFor='message' className='block text-gray-700 text-xs font-medium mb-2'>
                        মেসেজঃ <span className='text-red-500'>*</span>
                    </label>
                    <textarea
                        id='message'
                        name='message'
                        rows='4'
                        placeholder='আপনার মেসেজ'
                        required
                        className='w-full px-4 py-2 text-xs border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className='flex justify-start'>
                    <button
                        type='submit'
                        className='bg-blue-600 text-white px-6 py-3 rounded-md text-xs font-medium hover:bg-blue-700 transition duration-300 w-full md:w-auto'
                    >
                        মেসেজ পাঠান
                    </button>
                </div>
            </form>

            <div className='mt-8 rounded-lg overflow-hidden shadow-sm border border-gray-100'>
                <iframe
                    src="https://maps.gstatic.com/mapfiles/openhand_8_8.cur&quot"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                />
            </div>

        </div>
    );
};

export default ContactUs;