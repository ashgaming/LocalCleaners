import React from 'react';
import { useSelector } from 'react-redux';
import { Users } from 'lucide-react';

const Groups = () => {
  const { groups } = useSelector((state) => state.dashboard);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Groups</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group) => (
          <div
            key={group.id}
            className="bg-white rounded-xl shadow-md p-6"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{group.name}</h3>
                <p className="text-sm text-gray-500">{group.members} members</p>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Created: {group.created}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Groups;