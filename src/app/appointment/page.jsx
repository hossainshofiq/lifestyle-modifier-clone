import React from 'react';

const AppointmentPage = () => {


    // if (submitted) {
    //     return (
    //         <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
    //             <h2 className="text-2xl font-bold text-green-600 mb-4">Appointment Scheduled!</h2>
    //             <p className="mb-4">Thank you, {formData.name}. Your appointment has been scheduled for {formData.date} at {formData.time}.</p>
    //             <p className="mb-4">A confirmation has been sent to {formData.email}.</p>
    //             <button
    //                 onClick={() => setSubmitted(false)}
    //                 className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
    //             >
    //                 Schedule Another Appointment
    //             </button>
    //         </div>
    //     );
    // }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6">Schedule an Appointment</h1>

            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="name">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="date">
                        Date
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        className="w-full px-3 py-2 border rounded"
                        min={new Date().toISOString().split('T')[0]}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="time">
                        Time
                    </label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        className="w-full px-3 py-2 border rounded"
                        min="09:00"
                        max="17:00"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="service">
                        Service
                    </label>
                    <select
                        id="service"
                        name="service"
                        className="w-full px-3 py-2 border rounded"
                    >
                        <option value="general">General Consultation</option>
                        <option value="checkup">Routine Checkup</option>
                        <option value="emergency">Emergency</option>
                        <option value="followup">Follow-up</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                >
                    Schedule Appointment
                </button>
            </form>
        </div>
    );
};

export default AppointmentPage;