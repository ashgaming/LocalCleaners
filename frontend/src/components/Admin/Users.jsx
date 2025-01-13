import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { User } from 'lucide-react';
import ElementLoader from '../ui/ELementLoader';
import { GetUsersAdmin } from '../../redux/actions/AdminActions';

const Users= () => {
  const { users , loading , error , success } = useSelector((state) => state.getUsersAdmin);
  const dispatch = useDispatch()

  useEffect(()=>{
    if(!success) {dispatch(GetUsersAdmin())}
  },[])

  if (loading) return <ElementLoader />

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Users</h2>
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
             
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <User className="h-6 w-6 text-gray-500" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {user?._id}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{user?.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{user?.fullname?.firstname} {user?.fullname?.lastname}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;