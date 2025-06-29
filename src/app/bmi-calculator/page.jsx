'use client';
import React, { useState } from 'react';

const BMICalculatorPage = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [bmiCategory, setBmiCategory] = useState('');

    const calculateBMI = () => {
        if (height && weight) {
            const heightInMeters = height / 100;
            const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
            setBmi(bmiValue);

            // Determine BMI category in Bengali
            if (bmiValue < 18.5) {
                setBmiCategory('অপুষ্টি (Underweight)');
            } else if (bmiValue >= 18.5 && bmiValue < 25) {
                setBmiCategory('সাধারণ ওজন (Normal weight)');
            } else if (bmiValue >= 25 && bmiValue < 30) {
                setBmiCategory('অতিরিক্ত ওজন (Overweight)');
            } else {
                setBmiCategory('স্থূলতা (Obesity)');
            }
        }
    };

    const resetCalculator = () => {
        setHeight('');
        setWeight('');
        setBmi(null);
        setBmiCategory('');
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">BMI ক্যালকুলেটর</h1>
                    <p className="text-gray-600">আপনার বডি মাস ইনডেক্স (BMI) গণনা করুন</p>
                </div>

                <div className="space-y-6">
                    <div>
                        <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
                            উচ্চতা (সেন্টিমিটার)
                        </label>
                        <input
                            type="number"
                            id="height"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="উদাহরণ: 170"
                        />
                    </div>

                    <div>
                        <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                            ওজন (কিলোগ্রাম)
                        </label>
                        <input
                            type="number"
                            id="weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="উদাহরণ: 65"
                        />
                    </div>

                    <div className="flex space-x-4">
                        <button
                            onClick={calculateBMI}
                            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                        >
                            গণনা করুন
                        </button>
                        <button
                            onClick={resetCalculator}
                            className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition"
                        >
                            রিসেট করুন
                        </button>
                    </div>

                    {bmi && (
                        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">আপনার BMI ফলাফল:</h3>
                            <p className="text-3xl font-bold text-blue-600">{bmi}</p>
                            <p className="text-gray-700 mt-2">শ্রেণী: {bmiCategory}</p>
                            
                            <div className="mt-4 text-sm text-gray-600">
                                <p className="font-medium">BMI ব্যাখ্যা:</p>
                                <ul className="list-disc pl-5 space-y-1 mt-1">
                                    <li>১৮.৫ এর কম: অপুষ্টি</li>
                                    <li>১৮.৫ - ২৪.৯: স্বাভাবিক ওজন</li>
                                    <li>২৫ - ২৯.৯: অতিরিক্ত ওজন</li>
                                    <li>৩০ বা বেশি: স্থূলতা</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BMICalculatorPage;