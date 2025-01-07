import React, { useEffect, useState } from 'react';
import { createSubscriptionPlans } from '../../redux/actions/SubscriptionActions';
import { useDispatch, useSelector } from 'react-redux';

export default function PlanForm() {
    const [featureCount, setFeatureCount] = useState(4)
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        price: 999,
        description: '',
        features: [],
        duration: 'day',
    });


    const dispatch = useDispatch();
    const { loading, error, success, plans } = useSelector(state => state.createSubscriptionPlans)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createSubscriptionPlans(formData));
    };

    useEffect(()=>{
       if (success) {setFormData({
            id: '',
            name: '',
            price: 999,
            description: '',
            features: [],
            duration: 'day',
        })
        

        alert('Service Addes sussesfully...!')}


    },[success])

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

        <form onSubmit={handleSubmit} className="space-y-4 p-7 max-w-80">
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

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Features
                </label>
                <div className="space-y-2">
                    {Array(featureCount).fill().map((feature, index) => (
                        <input
                            key={index}
                            type="text"
                            value={feature}
                            onChange={(e) => handleFeatureChange(index, e.target.value)}
                            placeholder={`Feature ${index + 1}`}
                            className="w-full m-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            required
                        />
                    ))}
                </div>
                <div className="flex space-x-2 mt-5">
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
            </div>

            <div>
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

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
            >
                {loading ? ' Loading' : 'Create Plan'}
            </button>
        </form>
    );
}