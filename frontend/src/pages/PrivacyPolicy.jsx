import React, { useState } from 'react';
import { AlertCircle, Send, User, Building2, FileWarning, Shield, Scale } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

const PrivacyPolicy = () => {
  return (
    <>
        <Navbar />
    <div className="max-w-4xl mx-auto p-8 pt-32">
      <div className="flex items-center space-x-2 mb-8">
        <Shield className="h-8 w-8 text-indigo-600" />
        <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
      </div>
      <div className="prose prose-indigo max-w-none">
        <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
          <p className="text-gray-700 mb-4">We collect information that you provide directly to us, including:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Personal identification information (Name, email address, phone number)</li>
            <li>Complaint and feedback details</li>
            <li>Department and employee information related to complaints</li>
            <li>Date and time of submissions</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">We use the collected information for the following purposes:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>To process and respond to your complaints and inquiries</li>
            <li>To improve our services and customer experience</li>
            <li>To communicate with you about your submissions</li>
            <li>To maintain records of customer interactions</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Security</h2>
          <p className="text-gray-700 mb-4">We implement appropriate security measures to protect your personal information, including:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments</li>
            <li>Access controls and authentication measures</li>
            <li>Secure data storage practices</li>
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Your Rights</h2>
          <p className="text-gray-700 mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Access your personal information</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent for data processing</li>
          </ul>
        </section>
      </div>
    </div>
    <Footer />
    </>

  );
}

export default PrivacyPolicy;