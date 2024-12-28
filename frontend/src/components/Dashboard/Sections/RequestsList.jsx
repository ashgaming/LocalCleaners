import { useState } from 'react';
import { Clock, MapPin, User } from 'lucide-react';
import RequestDetails from './RequestsDetails';

const mockRequests = [
  {
    id: '1',
    user: {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '(555) 123-4567'
    },
    date: '2024-03-25',
    time: '09:00 AM',
    service: 'Regular Cleaning',
    address: '123 Main St, City, State 12345',
    status: 'pending',
    notes: 'Has pets, please be careful with the door'
  },
  {
    id: '2',
    user: {
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '(555) 987-6543'
    },
    date: '2024-03-26',
    time: '02:00 PM',
    service: 'Deep Cleaning',
    address: '456 Oak Ave, City, State 12345',
    status: 'pending',
    notes: 'Access code: 1234'
  }
];

export default function RequestsList({ pending = [] }) {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

 
  const handleViewDetails = (request) => {
    setSelectedRequest(request);
    setIsDetailsOpen(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold">Cleaning Requests</h2>
      </div>

      <div className="divide-y">
        {pending?.map((request) => (
          <div key={request._id} className="p-4 hover:bg-gray-50">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-gray-400" />
                  <span className="font-medium">{request.user.fullname?.firstname} {request.user.fullname?.lastname}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span>{request.BookingData?.date} at {request.BookingData?.time}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{request.BookingData?.location}</span>
                </div>
              </div>
              <button
                onClick={() => handleViewDetails(request)}
                className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-md"
              >
                Manage Request
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedRequest && (
        <RequestDetails
          request={selectedRequest}
          isOpen={isDetailsOpen}
          onClose={() => setIsDetailsOpen(false)}
          setIsDetailsOpen={setIsDetailsOpen}
        />

      )}

     
    </div>
  );
}