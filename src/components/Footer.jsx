import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and About Section */}
                    <div className="md:col-span-1">
                        <div className="mb-4">
                            {/* Replace with your actual logo */}
                            <Image 
                                src="/assets/main_logo_fav.png" 
                                alt="MD_ABDUL_KAIYUM Logo"
                                width={120}
                                height={60}
                            />
                        </div>
                        <p className="text-sm text-gray-600">
                            পীস লাইব্রেরী মূলত এটি একটি সংস্থা, ঔষধকে খাদ্য হিসেবে নয়, বরং খাদ্যকেই ঔষধ হিসেবে গ্রহণ করুন। এই স্লোগান নিয়ে আমাদের স্বাস্থ্যকর লাইফ স্টাইল এগিয়ে নিয়ে যাওয়ার চেষ্টা করছি।
                        </p>
                    </div>

                    {/* Address Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-blue-800">ঠিকানা</h3>
                        <address className="not-italic text-sm text-gray-600">
                            PeaceLibrary DIABETES CENTRE<br />
                            Vill-Sekhpur (Chandpur Brigde)<br />
                            Jharkhand Border<br />
                            Po- Bhasaipaikar<br />
                            Ps-Samserganj<br />
                            Dist-Murshidabad<br />
                            Pin-742202<br />
                            State- West Bengal
                        </address>
                    </div>

                    {/* Hours Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-blue-800">খোলা থাকে</h3>
                        <div className="text-sm text-gray-600">
                            <p>সোম – বৃহস্পতি<br />(6 AM – 6 PM)</p>
                            <p className="mt-2">শনি – রবি<br />(6 AM – 6 PM)</p>
                            <p className="mt-2 text-red-500">শুক্রবার বন্ধ থাকে</p>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-blue-800">যোগাযোগ</h3>
                        <div className="text-sm text-gray-600">
                            <p className="mb-2">
                                <span className="font-medium">ফোন:</span><br />
                                +91 9732 624 907
                            </p>
                            <p className="mb-2">
                                <span className="font-medium">হোয়াটসঅ্যাপ:</span><br />
                                +91 9732 624 907
                            </p>
                            <p className="mt-4">
                                <span className="font-medium">FAQ</span>
                            </p>
                            <p>
                                <span className="font-medium">Career</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-200 mt-8 pt-5">
                    <p className="text-xs text-gray-500 text-center">
                        © {new Date().getFullYear()} <a className="hover:underline" href="https://mdabdulkaiyum.in/">MD ABDUL KAIYUM - Peacelibrary.</a> All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;