import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CreditCard } from 'lucide-react';
import { createSubscription, setCity, setCountryCode, setEmail, setFirstname, setHouse, setLastname, setMonths, setPhoneNumber, setPincode, setState, setStreet } from '../../redux/actions/SubscriptionActions';
import BackButton from '../../components/subscription/BackButton';
import ElementLoader from '../../components/ui/ELementLoader';

const UserInfoPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { selectedPlan, firstname, lastname, email, countryCode, phoneNumber, street, house, state, city, pincode, months } = useSelector((state) => state.subscriptionInfo);

    const {
        subscription = [],
        loading,
        error,
        success,
    } = useSelector((state) => state.createSubscription);

    useEffect(()=>{
        if (success) {
            navigate(`/checkout/${subscription?._id}`);
        }
    },[success])

    if (!selectedPlan) {
        navigate('/services');
        return null;
    }

    const handleFirstNameChange = (e) => {
        dispatch(setFirstname(e.target.value));
    };

    const handleLastNameChange = (e) => {
        dispatch(setLastname(e.target.value));
    };

    const handleEmailChange = (e) => {
        dispatch(setEmail(e.target.value));
    };


    const handleContryCodeChange = (e) => {
        dispatch(setCountryCode(e.target.value));
    };


    const handlePhoneNumberChange = (e) => {
        dispatch(setPhoneNumber(e.target.value));
    };



    const handleStreetChange = (e) => {
        dispatch(setStreet(e.target.value));
    };



    const handleHouseChange = (e) => {
        dispatch(setHouse(e.target.value));
    };


    const handleCityChange = (e) => {
        dispatch(setCity(e.target.value));
    };

    const handleStateChange = (e) => {
        dispatch(setState(e.target.value));
    };

    const handlePincodeChange = (e) => {
        dispatch(setPincode(e.target.value));
    };


    const handleProceedToCheckout = async (e) => {
        e.preventDefault()

        const date = new Date(); // Current date

        // Add 1 day to the current date for start_date
        const start_date = new Date(date); // Clone the current date
        start_date.setDate(date.getDate() + 1); // Increment by 1 day

        const end_date = new Date(start_date); // Clone the start_date
        end_date.setDate(start_date.getDate() + (28 * months));



        const fdata = {
            id:selectedPlan._id,
            service: selectedPlan.name,
            firstname,
            lastname,
            email,
            countryCode,
            phoneNumber,
            duration:months,
            start_date,
            end_date,
            address: `${house} ${street} ${city} ${state} ${pincode}`
        }

        localStorage.setItem('subscriberInfo',JSON.stringify({
            firstname, lastname, email, countryCode, phoneNumber, street, house, state, city, pincode
        }))

        await dispatch(createSubscription(fdata))

      

    };

  

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-lg mx-auto">

                <div className="mb-6">
                    <BackButton to="/services" />
                    {loading && <ElementLoader />}

                </div>

                <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="flex items-center justify-center mb-8">
                        <CreditCard className="h-12 w-12 text-blue-600" />
                    </div>

                    <h2 className="text-2xl font-bold text-center mb-8">Subscriber Details</h2>
                    {error && <h1 className='text-red-700'>{error}</h1>}

                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Selected Plan: {selectedPlan?.name}</h3>
                        <p className="text-gray-600">{selectedPlan.description}</p>
                    </div>


                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Fullname
                        </label>
                        <input
                            type="text"
                            value={firstname}
                            placeholder='firstname'
                            onChange={handleFirstNameChange}
                            className="w-1/3 h-10 p-2 m-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />


                        <input
                            type="text"
                            value={lastname}
                            onChange={handleLastNameChange}
                            placeholder='lastname'
                            className="w-1/3 h-10 p-2 m-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Subscription Email: {email}
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            className="w-full h-10 p-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Mobile Number
                        </label>
                        <input
                            type="text"
                            value={countryCode}
                            onChange={handleContryCodeChange}
                            className="w-20 h-10 p-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <input
                            type="text"
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                            className="w-1/2 h-10 p-2 ml-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />

                    </div>


                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Street Address
                    </label>
                    <input
                        type="text"
                        value={street}
                        onChange={handleStreetChange}
                        className="w-full h-10 p-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Apartment/Unit (Optional)
                    </label>
                    <input
                        type="text"
                        value={house}
                        onChange={handleHouseChange}
                        className="w-full h-10 p-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />



                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        City
                    </label>
                    <input
                        type="text"
                        value={city}
                        onChange={handleCityChange}
                        className="w-full h-10 p-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        State
                    </label>
                    <input
                        type="text"
                        value={state}
                        onChange={handleStateChange}
                        className="w-full h-10 p-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />

                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        pincode
                    </label>
                    <input
                        type="text"
                        value={pincode}
                        onChange={handlePincodeChange}
                        className="w-full h-10 p-2  bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />


                    <button
                        className="w-full bg-blue-600 mt-5 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
                        onClick={e => handleProceedToCheckout(e)}
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserInfoPage;
