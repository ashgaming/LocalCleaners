import React from 'react';
import { Calendar, Clock } from 'lucide-react';

const timeSlots = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
];

export default function DateTimePicker({
  selectedDate,
  selectedTime,
  onDateChange,
  onTimeChange,
}) {
  // Generate next 14 days for date selection
  const dates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return {
      date:date.toISOString().split('T')[0],
      in_date:date.toLocaleDateString('en-IN', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/\//g, '-')
    }
  });

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Calendar className="h-4 w-4 inline-block mr-2" />
          Select Date
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {dates.map(({date,in_date}) => (
            <button
              key={date}
              onClick={() => onDateChange(in_date)}
              className={`p-2 text-sm rounded-md text-center transition ${
                selectedDate === date
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border hover:border-blue-500'
              }`}
            >
              {new Date(date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
              })}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Clock className="h-4 w-4 inline-block mr-2" />
          Select Time
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {timeSlots.map((time) => (
            <button
              key={time}
              onClick={() => onTimeChange(time)}
              className={`p-2 text-sm rounded-md text-center transition ${
                selectedTime === time
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border hover:border-blue-500'
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}