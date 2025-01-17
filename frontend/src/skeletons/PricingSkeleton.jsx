import React from 'react'

const Card = () => (
    <div className="flex flex-col bg-neutral-300 w-full max-w-7xl min-h-96 animate-pulse rounded-xl p-4 gap-4">
      <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
      <div className="flex flex-col gap-2">
        <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
        <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
        <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
        <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
      </div>
    </div>
  );


const PricingSkeleton = () => {
    const numCards = 6; 
    return (
        <div class="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4 p-4">
            {Array.from({ length: numCards }).map((_, index) => (
        <Card key={index} /> 
      ))}
        </div>
    )
}

export default PricingSkeleton
