import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCircle2, Building2, Shield, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import CustomButton from '../components/Auth/ui/CustomButton';
import CustomInput from '../components/Auth/ui/CustomInput';
import RoleButton from '../components/Auth/auth/RoleButton';

export default function AuthForm() {
  const navigate = useNavigate();
  const [authMode, setAuthMode] = useState('login');
  const [role, setRole] = useState('user');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'user'
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (authMode === 'signup' && role === 'employee') {
      // Redirect to employee profile creation
      navigate('/employee/profile');
    }
    // Handle other auth logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {authMode === 'login' ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-gray-600">
            {authMode === 'login' 
              ? 'Sign in to your account' 
              : 'Join us today'}
          </p>
        </div>

        {/* Role Selection */}
        <div className="flex justify-center gap-4 mb-8">
          <RoleButton
            icon={UserCircle2}
            label="User"
            active={role === 'user'}
            onClick={() => setRole('user')}
          />
          <RoleButton
            icon={Building2}
            label="Employee"
            active={role === 'employee'}
            onClick={() => setRole('employee')}
          />
          <RoleButton
            icon={Shield}
            label="Admin"
            active={role === 'admin'}
            onClick={() => setRole('admin')}
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <CustomInput
            label="Email Address"
            type="email"
            icon={Mail}
            required
            value={formData.email}
            onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
            placeholder="Enter your email"
          />

          <div className="relative">
            <CustomInput
              label="Password"
              type={showPassword ? 'text' : 'password'}
              icon={Lock}
              required
              value={formData.password}
              onChange={e => setFormData(prev => ({ ...prev, password: e.target.value }))}
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[34px] text-gray-400 hover:text-gray-600"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>

          {authMode === 'signup' && (
            <CustomInput
              label="Confirm Password"
              type={showPassword ? 'text' : 'password'}
              icon={Lock}
              required
              placeholder="Confirm your password"
            />
          )}

          <CustomButton type="submit" fullWidth>
            {authMode === 'login' ? 'Sign In' : 'Sign Up'}
          </CustomButton>

          <p className="text-center text-sm text-gray-600">
            {authMode === 'login' ? (
              <>
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => setAuthMode('signup')}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => setAuthMode('login')}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Sign in
                </button>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
}