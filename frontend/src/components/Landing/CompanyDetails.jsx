import React from 'react'
import { Sparkles } from 'lucide-react';

const CompanyDetails = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="animate-fade-in-up">
                        <div className="flex items-center gap-3 mb-6">
                            <Sparkles className="w-8 h-8 text-sky-600" />
                            <h1 className="text-3xl font-bold text-gray-900">Local Cleaners</h1>
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Welcome to LocalCleners!
                           , where we turn clean homes into happy homes! Our dedicated team provides professional, reliable, and customized cleaning services to fit your unique needs and schedule. Using eco-friendly products and meticulous attention to detail, we ensure your space is spotless and inviting, giving you more time to enjoy what matters most. Let us handle the cleaning while you relax in the comfort of a beautifully maintained home. Contact us today for a free quote and experience the difference!
                        </p>
                       
                    </div>

                    <div className="relative group animate-fade-in">
                        <div className="absolute -inset-4 bg-gradient-to-r from-sky-600 to-cyan-500 rounded-xl opacity-20 blur-lg group-hover:opacity-30 transition-all duration-300"></div>
                        <img
                            src="https://cdn.leonardo.ai/users/21d125fe-94d0-48ba-b72e-564de3ba3507/generations/2cb9d75c-1556-4135-a6db-f30eb114a174/Leonardo_Phoenix_09_Two_men_one_with_a_rugged_beard_and_short_0.jpg"
                            alt="Professional cleaning service"
                            className="rounded-lg shadow-2xl w-full h-[400px] object-cover transform group-hover:scale-[1.02] transition-all duration-300"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyDetails
