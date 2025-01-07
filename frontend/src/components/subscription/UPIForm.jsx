import React from 'react';
import { Smartphone } from 'lucide-react';

export const UPIForm = ({ upiId, onChange }) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <Smartphone className="inline-block w-4 h-4 mr-2" />
          UPI ID
        </label>
        <input
          type="text"
          name="upiId"
          value={upiId}
          onChange={onChange}
          placeholder="username@upi"
          className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
    </div>
  );
};