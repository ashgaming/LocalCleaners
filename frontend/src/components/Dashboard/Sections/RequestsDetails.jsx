import React, { useEffect, useState } from 'react';
import { X, CheckCircle, AlertCircle } from 'lucide-react';
import AssignEmployeeForm from './AssignEmployeeForm';
import RequestStatusBadge from './RequestStatusBadge';


export default function RequestDetails({ request, isOpen, onClose , setIsDetailsOpen }) {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (status == 'success') {
    const timer = setTimeout(() => {
        setIsDetailsOpen(false);
        setStatus(null)
      }, 3000); // 3000 milliseconds = 3 seconds

      return () => clearTimeout(timer);
    }
    }, [status]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={()=>{
         setStatus(null);
         onClose()}} />

        <div className="relative bg-white rounded-lg max-w-lg w-full mx-auto shadow-xl">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="text-lg font-semibold">Request Details</h3>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4">
            {status === 'success' && (
              <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-md flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Request successfully updated
              </div>
            )}

            {status === 'error' && (
              <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                Failed to update request. Please try again.
              </div>
            )}

            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Customer Information</h4>
                <div className="space-y-1 text-gray-600">
                  <p>Name: {request.user?.fullname.firstname} {request.user?.fullname.lastname} </p>
                  <p>Email: {request.user?.email}</p>
                  <p>Phone: {request?.phoneNumber}</p>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Service Details</h4>
                <div className="space-y-1 text-gray-600">
                  <p>Service: {request?.service}</p>
                  <p>Date: {request.BookingData?.date}</p>
                  <p>Time: {request.BookingData?.time}</p>
                  <p>Address: {request.BookingData?.location}</p>
                  {request.notes && <p>Notes: {request.notes}</p>}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Status</h4>
                <RequestStatusBadge status={request?.work_status} />
              </div>

              <AssignEmployeeForm
                requestId={request._id}
                onSuccess={() => setStatus('success')}
                onError={() => setStatus('error')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}