import React from 'react'

const ServicesSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50">
  <div className="pt-20 pb-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="h-8 md:h-10 bg-gray-300 rounded-md mb-4 mx-auto w-1/3"></div>
        <div className="h-4 bg-gray-200 rounded-md mx-auto w-3/4 max-w-2xl"></div>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md animate-pulse"
            >
              <div className="h-16 w-16 bg-gray-300 rounded-full mb-4 mx-auto"></div>
              <div className="h-6 bg-gray-300 rounded-md mb-2 w-2/3 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded-md mb-1 w-full"></div>
              <div className="h-4 bg-gray-200 rounded-md mb-1 w-5/6 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded-md w-3/4 mx-auto"></div>
            </div>
          ))}
      </div>
    </div>
  </div>
</div>

  )
}

export default ServicesSkeleton
