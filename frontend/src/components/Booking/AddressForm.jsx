import React from 'react';
import { MapPin } from 'lucide-react';



export default function AddressForm({ address, onChange }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center mb-4">
        <MapPin className="h-5 w-5 text-blue-500 mr-2" />
        <h3 className="text-lg font-medium">Service Location</h3>
      </div>
      
      <div className="grid gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Street Address
          </label>
          <input
            type="text"
            value={address.street}
            onChange={(e) => onChange('street', e.target.value)}
            className="w-full p-2 h-8 rounded-md border-gray-300 shadow-sm  focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Apartment/Unit (Optional)
          </label>
          <input
            type="text"
            value={address.unit}
            onChange={(e) => onChange('unit', e.target.value)}
            className="w-full p-2 h-8 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <input
              type="text"
              value={address.city}
              onChange={(e) => onChange('city', e.target.value)}
              className="w-full p-2 h-8 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State
            </label>
            <input
              type="text"
              value={address.state}
              onChange={(e) => onChange('state', e.target.value)}
              className="w-full p-2 h-8 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ZIP Code
            </label>
            <input
              type="text"
              value={address.pincode}
              onChange={(e) => onChange('pincode', e.target.value)}
              className="w-full p-2 h-8 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}