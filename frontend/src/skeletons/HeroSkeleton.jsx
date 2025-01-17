import React from 'react'

const HeroSkeleton = () => {
    return (
        <div className="pt-16 md:pt-20 bg-gradient-to-r from-bg-gray-300 to-bg-gray-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="text-center">

                    <div className="h-10 sm:h-12 md:h-16 bg-neutral-400/50 mb-4 md:mb-6 rounded-md"></div>

                    <div className="h-6 sm:h-7 md:h-8 bg-neutral-400/50 mb-6 md:mb-8 rounded-md"></div>

                    <div className="h-10 sm:h-12 w-40 sm:w-48 bg-neutral-400/50 rounded-lg mx-auto"></div>
                </div>
            </div>
        </div>
    )
}

export default HeroSkeleton
