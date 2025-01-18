import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchAvalabityService } from '../../redux/actions/UserActions';
import Loader from '../Auth/ui/Loader';

const AvalabityCheck = () => {
    const dispatch = useDispatch()
    const { result, loading, error } = useSelector(state => state.avalabityCheck)
    const pincodeRef = useRef(null)
    const HandleSearch = (e) => {
        dispatch(searchAvalabityService(pincodeRef.current.value))
    }


    return (
        <div className="flex flex-col items-center p-4 space-y-6 md:p-8 md:space-y-8 bg-gray-100 rounded-lg shadow-lg">
            <strong className="text-2xl font-bold text-gray-800 md:text-3xl">
                Service Area
            </strong>
            <p className="text-center text-gray-600 md:text-lg">
                Find out if you are eligible for service by entering your zip code below.
            </p>
            <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <input
                    type="text"
                    ref={pincodeRef}
                    placeholder="Enter your zip code"
                    className="w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 sm:w-auto"
                />
                <button
                    type="button"
                    disabled={loading}
                    onClick={()=>HandleSearch()}
                    className="px-6 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transform transition-transform duration-200 hover:scale-105"
                >
                   { loading ? <Loader /> : 'Check' }
                </button>
            </div>
            {result?.status && !error && (
                <p className={`text-center ${ result?.status === 'Available' ?  'text-green-600' : 'text-yellow-600' } text-lg animate-fade-in`}>
                    { result?.status === 'Available' ?'Yes':'Sorry'}, we have {result?.count} cleaners who cover {pincodeRef?.current?.value}!
                </p>
            )}

            {
                error && ( 
                    <p className="text-center text-red-600 text-lg animate-fade-in">
                    Unable to extract data
                </p>
                )
            }
        </div>
    );
};

export default AvalabityCheck;
