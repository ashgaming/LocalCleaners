import React, { useState } from 'react'
import DashBoardHeader from '../DashBoardHeader'
import { Save, Bell, Shield, Clock, Globe, CreditCard, UserCog, Building, Loader } from 'lucide-react';

const SettingSection = () => {
  const [activeTab, setActiveTab] = useState('notifications');
  const [isSaving, setIsSaving] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSaving(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const tabs = [
   // { id: 'notifications', label: 'Notifications', icon: Bell },
   // { id: 'security', label: 'Security', icon: Shield },
   // { id: 'scheduling', label: 'Scheduling', icon: Clock },
    { id: 'preferences', label: 'Preferences', icon: UserCog },
   // { id: 'billing', label: 'Billing', icon: CreditCard },
  //  { id: 'business', label: 'Business Profile', icon: Building },
    { id: 'localization', label: 'Localization', icon: Globe },
  ];
  return (
    <div>
      <DashBoardHeader title={'Settings'} />


      <div className="min-h-screen bg-gray-100">
        <div className="md:ml-1  p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Advanced Settings</h1>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
              >
                {isSaving ? (
                  <Loader size="small" className="mr-2" />
                ) : (
                  <Save className="h-4 w-4 mr-2" />
                )}
                {isSaving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>

            {showSuccess && (
              <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-md">
                Settings saved successfully!
              </div>
            )}

            <div className="bg-white rounded-lg shadow-md">
              <div className="border-b">
                <div className="flex overflow-x-auto">
                  {tabs.map(({ id, label, icon: Icon }) => (
                    <button
                      key={id}
                      onClick={() => setActiveTab(id)}
                      className={`flex items-center px-4 py-3 border-b-2 whitespace-nowrap ${activeTab === id
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                        }`}
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6">
                {activeTab === 'notifications' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium mb-4">Notification Preferences</h3>
                    <div className="space-y-4">
                      {['Email', 'SMS', 'Push', 'In-app'].map((type) => (
                        <div key={type} className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              defaultChecked
                              className="h-4 w-4 text-blue-600 rounded"
                            />
                          </div>
                          <div className="ml-3">
                            <label className="font-medium text-gray-700">{type} Notifications</label>
                            <p className="text-gray-500 text-sm">Receive {type.toLowerCase()} notifications about your bookings</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'security' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium mb-4">Security Settings</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Two-Factor Authentication</label>
                        <div className="mt-2">
                          <button className="px-4 py-2 bg-green-600 text-white rounded-md">Enable 2FA</button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Session Management</label>
                        <button className="mt-2 text-red-600 hover:text-red-700">Sign out from all devices</button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'scheduling' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium mb-4">Scheduling Preferences</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Default Service Duration</label>
                        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                          <option>2 hours</option>
                          <option>3 hours</option>
                          <option>4 hours</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Buffer Time Between Services</label>
                        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                          <option>15 minutes</option>
                          <option>30 minutes</option>
                          <option>45 minutes</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'preferences' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium mb-4">User Preferences</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Theme</label>
                        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                          <option>Light</option>
                          <option>Dark</option>
                          <option>System</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Dashboard Layout</label>
                        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                          <option>Compact</option>
                          <option>Comfortable</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'billing' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium mb-4">Billing Settings</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Default Payment Method</label>
                        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                          <option>Credit Card (**** 1234)</option>
                          <option>PayPal</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Billing Address</label>
                        <textarea
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'business' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium mb-4">Business Profile</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Business Name</label>
                        <input
                          type="text"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Business Hours</label>
                        <div className="grid grid-cols-2 gap-4 mt-1">
                          <input
                            type="time"
                            className="block w-full rounded-md border-gray-300 shadow-sm"
                          />
                          <input
                            type="time"
                            className="block w-full rounded-md border-gray-300 shadow-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'localization' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium mb-4">Localization Settings</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Language</label>
                        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                          <option>English</option>
                          <option>Spanish</option>
                          <option>French</option>
                          <option>Hindi</option>
                          <option>Sunskrit</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Time Zone</label>
                        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                          <option>UTC-5 (Eastern Time)</option>
                          <option>UTC-6 (Central Time)</option>
                          <option>UTC-7 (Mountain Time)</option>
                          <option>UTC-8 (Pacific Time)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingSection;
