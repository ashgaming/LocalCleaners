import React from 'react'

const CancelBookingPop = () => {
    return (
        <div className="fixed inset-0 z-100 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
                <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={() => {
                    setStatus(null);
                    onClose()
                }} />



                
              <div class="flex space-x-4 w-full">
                <button class="bg-red-300 w-full hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded">Cancel</button>
                <button class="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Start</button>
              </div>

            </div>
        </div>
  )
}

export default CancelBookingPop
