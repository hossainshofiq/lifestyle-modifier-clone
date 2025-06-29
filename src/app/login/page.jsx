import React from 'react';
import Link from 'next/link';

const LoginPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">
            <div className='flex gap-3'>
                <h1 className="text-2xl font-bold mb-6 text-gray-800">লগিন করুন</h1>
                <div className='text-blue-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" class="w-10 h-10"><path d="M222-255q63-40 124.5-60.5T480-336q72 0 134 20.5T739-255q44-54 62.5-109T820-480q0-145-97.5-242.5T480-820q-145 0-242.5 97.5T140-480q0 61 19 116t63 109Zm257.814-195Q422-450 382.5-489.686q-39.5-39.686-39.5-97.5t39.686-97.314q39.686-39.5 97.5-39.5t97.314 39.686q39.5 39.686 39.5 97.5T577.314-489.5q-39.686 39.5-97.5 39.5Zm-.219 370q-83.146 0-156.275-31.5t-127.225-86Q142-252 111-324.841 80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.5q-54 54.5-127.129 86T479.595-80Z"></path></svg>
                </div>
            </div>
            <div className="py-8 px-4 max-w-screen-sm rounded-sm shadow-md w-full">
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-xs font-medium mb-2">
                            ফোন নম্বর বা ইমেইলঃ
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-sm text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="ফোন নম্বর বা ইমেইল দিন"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-xs font-medium mb-2">
                            পাসওয়ার্ড
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-sm text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="পাসওয়ার্ড দিন"
                        />
                    </div>

                    <div className='flex justify-between items-center'>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white py-2 px-4 text-xs rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            লগিন করুন
                        </button>

                        <div className="mt-4 text-xs">
                            <span>পাসওয়ার্ড {''}
                                <Link href="/password/reset" className=" text-blue-600 hover:underline">
                                    ভুলে গিয়েছেন?
                                </Link>
                            </span>

                        </div>
                    </div>

                    <div className="mt-6">
                        <p className="text-xs text-gray-600">
                            কোনো একাউন্ট না থাকলে{' '}
                            <Link href="/register" className="text-blue-600 hover:underline">
                                এখন থেকে {''}
                            </Link>
                            নতুন এ্যাকাউন্ট তৈরি করতে পারেন।
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;