import React, { useState } from 'react';

function BookingPage() {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date().toISOString().split('T')[0];

    if (checkInDate < today) {
      alert('Check-In Date cannot be in the past.');
      return;
    }

    if (checkOutDate <= checkInDate) {
      alert('Check-Out Date must be after the Check-In Date.');
      return;
    }

    alert('Booking successfully completed!');
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="uppercase hover:underline text-4xl font-extrabold text-center mb-12 text-gray-800 heading-text relative">
        Book Your Stay
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-lg lg:max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-3">
            <label htmlFor="name" className="block text-xl font-semibold text-left text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-3">
            <label htmlFor="email" className="block text-xl font-semibold text-left text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-3">
            <label htmlFor="phone" className="block text-xl font-semibold text-left text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              placeholder="Your Phone Number"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-3">
            <label htmlFor="guests" className="block text-xl font-semibold text-left text-gray-700">
              Number of Guests
            </label>
            <input
              type="number"
              id="guests"
              name="guests"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              placeholder="Number of Guests"
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6 md:mb-3">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label htmlFor="checkin" className="block text-xl font-semibold text-left text-gray-700">
              Check-In Date
            </label>
            <input
              type="date"
              id="checkin"
              name="checkin"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              min={today}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-3">
            <label htmlFor="checkout" className="block text-xl font-semibold text-left text-gray-700">
              Check-Out Date
            </label>
            <input
              type="date"
              id="checkout"
              name="checkout"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              min={checkInDate}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2.5 transition-transform duration-300 transform hover:scale-105 focus:outline-none shadow-md"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

export default BookingPage;
