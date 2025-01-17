import React from 'react'
import { Link } from 'react-router-dom'

const FooterSkeleton = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
    <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div className="md:max-w-md lg:col-span-2">
            <Link to="/" aria-label="Go home" title="Local Cleaners" className="inline-flex items-center">
                <svg className="w-8 text-deep-purple-accent-400" viewBox="0 0 24 24" strokeLinejoin="round" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" stroke="currentColor" fill="none">
                    <rect x="3" y="1" width="7" height="12" />
                    <rect x="3" y="17" width="7" height="6" />
                    <rect x="14" y="1" width="7" height="6" />
                    <rect x="14" y="11" width="7" height="12" />
                </svg>
                <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">Local Cleaners</span>
            </Link>
            <div className="mt-4 lg:max-w-sm">
                <p className="text-sm text-gray-800"></p>
                <p className="mt-4 text-sm text-gray-800"></p>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-3">
            <div>
                <p className="font-semibold tracking-wide text-gray-800"></p>
                <ul className="mt-2 space-y-2"></ul>
            </div>
            <div>
                <p className="font-semibold tracking-wide text-gray-800"></p>
                <ul className="mt-2 space-y-2"></ul>
            </div>
            <div>
                <p className="font-semibold tracking-wide text-gray-800"></p>
                <ul className="mt-2 space-y-2"></ul>
            </div>
        </div>
    </div>
    <div className="flex flex-col justify-between pt-5 pb-10 border-t sm:flex-row">
        <p className="text-sm text-gray-600"></p>
        <div className="flex items-center mt-4 space-x-4 sm:mt-0"></div>
    </div>
</div>

  )
}

export default FooterSkeleton
