import React from 'react'

const CompanyDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="animate-pulse">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div className="h-8 w-1/2 bg-gray-300 rounded-md"></div>
        </div>
        <div className="space-y-4">
          <div className="h-4 bg-gray-300 rounded-md w-full"></div>
          <div className="h-4 bg-gray-300 rounded-md w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded-md w-4/5"></div>
          <div className="h-4 bg-gray-300 rounded-md w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded-md w-2/3"></div>
        </div>
      </div>

      <div className="relative animate-pulse">
        <div className="absolute -inset-4 bg-gradient-to-r from-sky-600 to-cyan-500 rounded-xl opacity-20 blur-lg"></div>
        <div className="h-[400px] bg-gray-300 rounded-lg shadow-2xl w-full"></div>
      </div>
    </div>
  </div>
</div>

  )
}

export default CompanyDetailsSkeleton
