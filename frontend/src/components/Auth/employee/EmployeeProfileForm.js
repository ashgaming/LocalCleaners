import React, { useState } from 'react';
import { 
  User, Phone, Building, Briefcase, Clock, Book, FileText, Upload 
} from 'lucide-react';
import CustomInput from '../ui/CustomInput';
import CustomButton from '../ui/CustomButton';


export function EmployeeProfileForm() {
  const [profile, setProfile] = useState({
    fullName: '',
    phone: '',
    department: '',
    position: '',
    experience: '',
    skills: [],
    bio: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle profile submission
    console.log('Profile submitted:', profile);
  };

  const handleSkillsChange = (e) => {
    const skills = e.target.value.split(',').map(skill => skill.trim());
    setProfile(prev => ({ ...prev, skills }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Profile</h1>
          <p className="text-gray-600">Tell us more about your professional background</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-6">
            <CustomInput
              label="Full Name"
              icon={User}
              placeholder="John Doe"
              value={profile.fullName}
              onChange={e => setProfile(prev => ({ ...prev, fullName: e.target.value }))}
              required
            />

            <CustomInput
              label="Phone Number"
              icon={Phone}
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={profile.phone}
              onChange={e => setProfile(prev => ({ ...prev, phone: e.target.value }))}
              required
            />

            <CustomInput
              label="Department"
              icon={Building}
              placeholder="e.g., Engineering"
              value={profile.department}
              onChange={e => setProfile(prev => ({ ...prev, department: e.target.value }))}
              required
            />

            <CustomInput
              label="Position"
              icon={Briefcase}
              placeholder="e.g., Senior Developer"
              value={profile.position}
              onChange={e => setProfile(prev => ({ ...prev, position: e.target.value }))}
              required
            />

            <CustomInput
              label="Years of Experience"
              icon={Clock}
              type="number"
              placeholder="5"
              value={profile.experience}
              onChange={e => setProfile(prev => ({ ...prev, experience: e.target.value }))}
              required
            />

            <CustomInput
              label="Skills (comma-separated)"
              icon={Book}
              placeholder="React, TypeScript, Node.js"
              value={profile.skills.join(', ')}
              onChange={handleSkillsChange}
              required
            />

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Professional Bio
              </label>
              <textarea
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows={4}
                placeholder="Tell us about your professional background and expertise..."
                value={profile.bio}
                onChange={e => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                required
              />
            </div>

            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">
                Profile Picture
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500">
                      <span>Upload a file</span>
                      <input type="file" className="sr-only" accept="image/*" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <CustomButton type="submit" fullWidth>
              Complete Profile
            </CustomButton>
            <CustomButton type="button" variant="outline" fullWidth>
              Save as Draft
            </CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
}