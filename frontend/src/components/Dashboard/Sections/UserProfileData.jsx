import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const UserProfileData = () => {
    const dispatch = useDispatch();
    const { loading, user, error } = useSelector((state) => state.userData);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className=" w-full flex justify-center items-center bg-gray-100 m-5">
            <div className="bg-white rounded-lg shadow-md p-6 w-80 text-center">
                {user?.token ? (
                    <div>
                        <h1 className="text-xl font-semibold text-gray-800">User: {user?.user?.fullname?.firstname || user?.employee?.fullname?.firstname }  {user?.user?.fullname?.lastname || user?.employee?.fullname?.firstname }</h1>
                        <p className="text-gray-600">Email: {user?.user?.email || user?.employee?.email}</p>
                        <p className="text-gray-600">Role: {
                        user?.user ? 'User' :
                         user?.employee && user?.employee?.role}</p>
                    </div>
                ) : (
                    <>
                    <h1>No user data available 
                         <Link to={`/login`} className='text-sm text-blue-700 text '> Login here</Link>
                        </h1>

                    </>

                )}
            </div>
        </div>
    );
};

export default UserProfileData;
