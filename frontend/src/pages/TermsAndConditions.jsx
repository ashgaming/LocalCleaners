import { Scale } from 'lucide-react';
import React from 'react'
import Navbar from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

const TermsAndConditions = () => {
    return (
        <>
            <Navbar />
            <div className="max-w-4xl mx-auto p-8 pt-32">
                <div className="flex items-center space-x-2 mb-8">
                    <Scale className="h-8 w-8 text-indigo-600" />
                    <h1 className="text-3xl font-bold text-gray-900">Terms and Conditions</h1>
                </div>
                <div className="prose prose-indigo max-w-none">
                    <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                        <p className="text-gray-700 mb-4">By accessing and using this complaint submission system, you agree to be bound by these Terms and Conditions and all applicable laws and regulations.</p>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use of the Service</h2>
                        <p className="text-gray-700 mb-4">When using our service, you agree to:</p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>Provide accurate and truthful information</li>
                            <li>Not submit false or malicious complaints</li>
                            <li>Maintain confidentiality of your submissions</li>
                            <li>Not use the service for any illegal purposes</li>
                        </ul>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Complaint Processing</h2>
                        <p className="text-gray-700 mb-4">We will process complaints according to the following guidelines:</p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>All complaints will be reviewed within a reasonable timeframe</li>
                            <li>Priority will be given based on the severity and nature of the complaint</li>
                            <li>We reserve the right to dismiss frivolous or inappropriate complaints</li>
                            <li>Communication regarding complaints will be conducted via provided contact information</li>
                        </ul>
                    </section>

                    <section className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Limitation of Liability</h2>
                        <p className="text-gray-700 mb-4">We shall not be liable for:</p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2">
                            <li>Any indirect, consequential, or incidental damages</li>
                            <li>Service interruptions or technical issues</li>
                            <li>Loss of data or information submitted</li>
                            <li>Actions taken based on complaint resolutions</li>
                        </ul>
                    </section>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default TermsAndConditions;
