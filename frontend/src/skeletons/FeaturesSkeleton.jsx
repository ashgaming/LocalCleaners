import React from 'react'

const FeaturesSkeleton = () => {
    return (
        <div className="py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {Array(6)
                        .fill(0)
                        .map((_, index) => (
                            <div
                                key={index}
                                className="bg-gray-100 p-6 rounded-lg shadow-md animate-pulse"
                            >
                                <div className="h-12 w-12 bg-gray-300 mb-4 rounded-full mx-auto"></div>
                                <div className="h-6 bg-gray-300 rounded-md mb-2 w-3/4 mx-auto"></div>
                                <div className="h-4 bg-gray-200 rounded-md mb-1 w-full"></div>
                                <div className="h-4 bg-gray-200 rounded-md mb-1 w-5/6"></div>
                                <div className="h-4 bg-gray-200 rounded-md w-2/3 mx-auto"></div>
                            </div>
                        ))}
                </div>
            </div>
        </div>

    )
}

export default FeaturesSkeleton
