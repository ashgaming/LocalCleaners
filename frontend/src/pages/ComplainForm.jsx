import React, { useState } from 'react';
import { AlertCircle, Send, User, Building2, FileWarning } from 'lucide-react';
import Navbar from '../components/layout/Navbar';

const ComplainForm = () => {
    const [formData, setFormData] = useState({
        category: '',
        subject: '',
        description: '',
        employeeName: '',
        department: '',
        date: '',
        email: '',
        priority: 'medium'
      });
    
      const [submitted, setSubmitted] = useState(false);
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
      };
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      return (
        <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg mt-12">
            <div className="bg-indigo-600 rounded-t-xl p-6">
              <div className="flex items-center justify-center space-x-2">
                <AlertCircle className="h-8 w-8 text-white" />
                <h1 className="text-2xl font-bold text-white">Issue Report Form</h1>
              </div>
              <p className="mt-2 text-center text-indigo-100">
                Submit your concerns or complaints regarding our services or staff
              </p>
            </div>
    
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="employee">Employee Complaint</option>
                    <option value="service">Service Issue</option>
                    <option value="general">General Complaint</option>
                    <option value="technical">Technical Problem</option>
                  </select>
                </div>
    
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Priority Level
                  </label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
              </div>
    
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                  placeholder="Brief summary of the issue"
                  />
              </div>
    
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Employee Name (if applicable)
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="employeeName"
                      value={formData.employeeName}
                      onChange={handleChange}
                      className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
    
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Department
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building2 className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                      placeholder="Sales, Support, etc."
                      />
                  </div>
                </div>
              </div>
    
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                  placeholder="Please provide detailed information about your complaint or issue..."
                  />
              </div>
    
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Date of Incident
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                    />
                </div>
    
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                    placeholder="you@example.com"
                    />
                </div>
              </div>
    
              <div className="flex items-center justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setFormData({
                      category: '',
                      subject: '',
                      description: '',
                      employeeName: '',
                      department: '',
                      date: '',
                      email: '',
                      priority: 'medium'
                    })}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                  Clear Form
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                  <Send className="h-4 w-4 mr-2" />
                  Submit Report
                </button>
              </div>
            </form>
    
            {submitted && (
                <div className="fixed bottom-4 right-4">
                <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2">
                  <FileWarning className="h-5 w-5" />
                  <span>Report submitted successfully!</span>
                </div>
              </div>
            )}
          </div>
        </div>
            </>
      );
    }

export default ComplainForm
