import React, { useEffect, useState } from 'react';
import { createSubscriptionPlans } from '../../redux/actions/AdminActions';
import { useDispatch, useSelector } from 'react-redux';

export default function PlanForm() {
    const [featureCount, setFeatureCount] = useState(4)
    const initialFormData = {
        id: '',
        name: '',
        price: 999,
        description: '',
        features: [],
        duration: 'day',
    }
    const [formData, setFormData] = useState(initialFormData);


    const dispatch = useDispatch();
    const { loading, error, success, plans } = useSelector(state => state.createSubscriptionPlans)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createSubscriptionPlans(formData));
    };

    useEffect(() => {
        if (success) {
            alert('Service Addes sussesfully...!')
        }

    }, [success])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'price' ? Number(value) : value,
            updateOn: Date.now().toString()
        }));
    };

    const handleFeatureChange = (index, value) => {
        const newFeatures = [...formData.features];
        newFeatures[index] = value;
        setFormData(prev => ({
            ...prev,
            features: newFeatures,
        }));
    };

    return (

        <form
            onSubmit={handleSubmit}
            className="space-y-6 p-4 md:p-6 w-full flex flex-col md:flex-nowrap"
        >

            <div className="space-y-6 p-4 md:p-6 w-full flex flex-row md:flex-nowrap">

                <div className="p-5 grid grid-cols-1 md:grid-rows-2 gap-4 w-full md:w-3/4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Plan Identifier
                        </label>
                        <input
                            type="text"
                            name="id"
                            value={formData.id}
                            onChange={handleChange}
                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Plan Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Price
                        </label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            min="0"
                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows={3}
                            className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            required
                        />
                    </div>
                </div>

                <div className="p-5 w-full md:w-1/4 space-y-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Features
                    </label>
                    <div className="space-y-2">
                        {Array(featureCount)
                            .fill()
                            .map((feature, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    value={feature}
                                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                                    placeholder={`Feature ${index + 1}`}
                                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    required
                                />
                            ))}
                    </div>



                    <div className="flex space-x-2">
                        <button
                            type="button"
                            onClick={() => setFeatureCount(featureCount + 1)}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            +
                        </button>
                        <button
                            type="button"
                            onClick={() => setFeatureCount(featureCount - 1)}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                            -
                        </button>
                    </div>

                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Duration
                    </label>
                    <select
                        name="duration"
                        value={formData.duration}
                        onChange={handleChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        required
                    >
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                        <option value="month">Month</option>
                        <option value="year">Year</option>
                    </select>



                </div>
            </div>

            <div className="flex justify-end">
                <button
                    type="button"
                    onClick={() => setFormData(initialFormData)}
                    disabled={loading}
                    className="bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700 transition duration-200"
                >
                    Clear
                </button>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full md:w-auto bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
                {loading ? "Loading" : "Create Plan"}
            </button>
        </form>

    );
}