import React, { useEffect, useState } from 'react';
import Loader from '../../Auth/ui/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getAvalableEmployes } from '../../../redux/actions/BookingActions'
import axios from 'axios';
import { BACKEND_URL } from '../../../redux/actions/UserActions';
import { LIST_PENDING_BOOKING_SUCCESS } from '../../../redux/constants/BookingConstants';

const replaceObjectInNestedArray = (array, id, newObject) => {
  return array.map(item => {
    if (item._id === id) {
      return newObject; // Replace the entire object
    } else if (item.children) {
      item.children = replaceObjectInNestedArray(item.children, id, newObject);
    }
    return item;
  });
};

export default function AssignEmployeeForm({ requestId}) {

  const dispatch = useDispatch()
  useEffect(() => {
    (async () => {
      await dispatch(getAvalableEmployes())
    })()
  }, [])

  const { loading, success, employes, error } = useSelector(state => state.listAvalableEmployes)
  const {pending} = useSelector(state=>state.listPendingBooking)


  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedEmployee) return;

    setIsLoading(true);
    try {
      const response = await axios.post(`${BACKEND_URL}/bookings/accept`, {
        requestId, selectedEmployee
      }, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `bearer ${JSON.parse(localStorage.getItem('token'))?.token}`
        }
      }
      );


      const filteredPending = pending?.data.filter(obj => obj._id !== requestId)

      dispatch({
        type: LIST_PENDING_BOOKING_SUCCESS,
        payload: filteredPending
      })


      alert('Staff Assign Successfully')
    } catch (error) {
      alert('Staff Assigning failed')
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Assign Employee
        </label>
        <select
          value={selectedEmployee}
          onChange={(e) => setSelectedEmployee(e.target.value)}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          disabled={isLoading}
        >
          <option value="">Select an employee</option>
          {employes.map((employee) => (
            <option
              key={employee._id}
              value={employee._id}
            // disabled={!employee.available}
            >
              {employee?.fullname.firstname} {employee?.fullname.lastname} { /*!employee.available && '(Unavailable)' */}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={!selectedEmployee || isLoading || loading}
        className={`w-full flex items-center justify-center px-4 py-2 rounded-md ${!selectedEmployee || isLoading || loading
          ? 'bg-gray-300 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
      >
        {isLoading || loading ? (
          <>
            <Loader size="small" className="mr-2" />
            Assigning...
          </>
        ) : (
          'Assign Employee'
        )}
      </button>
    </form>
  );
}