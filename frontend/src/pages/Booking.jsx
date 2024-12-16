import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ServiceSelection from '../components/Booking/ServiceSelection';
import DateTimePicker from '../components/Booking/DateTimePicker';
import AddressForm from '../components/Booking/AddressForm';

export default function Booking() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: '',
    date: '',
    time: '',
    address: {
      street: '',
      unit: '',
      city: '',
      state: '',
      zip: '',
    },
  });

  const handleServiceSelect = (serviceId) => {
    setBookingData((prev) => ({ ...prev, service: serviceId }));
  };

  const handleDateChange = (date) => {
    setBookingData((prev) => ({ ...prev, date }));
  };

  const handleTimeChange = (time) => {
    setBookingData((prev) => ({ ...prev, time }));
  };

  const handleAddressChange = (field, value) => {
    setBookingData((prev) => ({
      ...prev,
      address: { ...prev.address, [field]: value },
    }));
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Handle booking submission
      navigate('/dashboard');
    }
  };

  const isStepComplete = () => {
    switch (step) {
      case 1:
        return bookingData.service !== '';
      case 2:
        return bookingData.date !== '' && bookingData.time !== '';
      case 3:
        const { street, city, state, zip } = bookingData.address;
        return street !== '' && city !== '' && state !== '' && zip !== '';
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3].map((number) => (
                <div
                  key={number}
                  className="flex items-center"
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= number ? 'bg-blue-600 text-white' : 'bg-gray-200'
                    }`}
                  >
                    {number}
                  </div>
                  {number < 3 && (
                    <div
                      className={`h-1 w-full ${
                        step > number ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step Content */}
            <div className="mb-8">
              {step === 1 && (
                <>
                  <h2 className="text-2xl font-semibold mb-4">Select Service</h2>
                  <ServiceSelection
                    selectedService={bookingData.service}
                    onServiceSelect={handleServiceSelect}
                  />
                </>
              )}

              {step === 2 && (
                <>
                  <h2 className="text-2xl font-semibold mb-4">Choose Date & Time</h2>
                  <DateTimePicker
                    selectedDate={bookingData.date}
                    selectedTime={bookingData.time}
                    onDateChange={handleDateChange}
                    onTimeChange={handleTimeChange}
                  />
                </>
              )}

              {step === 3 && (
                <>
                  <h2 className="text-2xl font-semibold mb-4">Service Location</h2>
                  <AddressForm
                    address={bookingData.address}
                    onChange={handleAddressChange}
                  />
                </>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              {step > 1 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-2 text-gray-600 hover:text-gray-800"
                >
                  Back
                </button>
              )}
              <button
                onClick={handleNext}
                disabled={!isStepComplete()}
                className={`px-6 py-2 rounded-md ${
                  isStepComplete()
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                {step === 3 ? 'Complete Booking' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}