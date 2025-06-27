import React from 'react';

const Footer = () => {
    return (
        <footer className="">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Address Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">PeaceLibrary DIABETES CENTRE</h3>
                        <address className="not-italic">
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
                        <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
                        <p>Monday - Saturday</p>
                        <p>6 AM - 6 PM</p>
                        <p className="mt-2">Sunday - Closed</p>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">যোগাযোগ</h3>
                        <p>Phone:<br></br>+91 9732 624 907</p>
                        <p className="mt-4">Email:<br></br>example@peacelibrary.com</p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-400 mt-8 py-5">
                    <p className='text-gray-500'>© {new Date().getFullYear()} <a className='hover:underline' href="https://mdabdulkaiyum.in/">MD ABDUL KAIYUM - Peacelibrary.</a> All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;