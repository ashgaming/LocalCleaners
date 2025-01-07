import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserCircle2, Building2, Shield, Mail, Lock, Eye, EyeOff, User } from 'lucide-react';
import CustomButton from '../components/Auth/ui/CustomButton';
import CustomInput from '../components/Auth/ui/CustomInput';
import RoleButton from '../components/Auth/auth/RoleButton';
import { useDispatch, useSelector } from 'react-redux'
import { userLogin, userRegister } from '../redux/actions/UserActions';
import Loader from '../components/Auth/ui/Loader';
import ErrorMessage from '../components/Auth/ui/ErrorMessage';

export default function AuthForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const userType = ['user', 'employee', 'admin']

  const [authMode, setAuthMode] = useState('login');
  const [role, setRole] = useState(userType[0]);
  const [showPassword, setShowPassword] = useState(false);


  const { loading: loadingRegister, user: usersRegister, error: errorRegister } = useSelector(state => state.userRegister)
  const { loading: loadingLogin, user: usersLogin, error: errorLogin, success } = useSelector(state => state.userLogin)
  const { loading: loadingData, token, user: usersData, error: errorData, usersSuccess } = useSelector(state => state.userData)

  const RoleButtons = [
    {
      icon: UserCircle2,
      label: "User",
      active: role === userType[0],
      onclick: () => setRole(userType[0]),
    },
    {
      icon: Building2,
      label: "Emplyee",
      active: role === userType[1],
      onclick: () => setRole(userType[1]),
    },
    {
      icon: Shield,
      label: "Admin",
      active: role === userType[2],
      onclick: () => setRole(userType[2]),

    }
  ]

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    otp:''
  });

  const validateForm = (email, password, firstname, lastname) => {
    //  const { email, password, firstname , lastname } = this.state;
    console.log(email, password, firstname, lastname)

    // Basic validation
    if (!email || !password) {
      return false; // Or throw an error
      console.log('hit 0')
    }

    // Email validation (basic regex check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return false; // Or throw an error
      console.log('hit 1')
    }

    // Password validation (minimum length, etc.)
    if (password.length < 8) {
      return false; // Or throw an error
      console.log('hit 2')
    }

    if (authMode === 'register') {
      if (!firstname || !lastname) {
        console.log('hit here')
        return false; // Or throw an error
      }
    }

    return true;

  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (role !== undefined && authMode === 'login') {
      if (validateForm(formData.email, formData.password)) {
        await dispatch(userLogin(role, formData));

        if (usersLogin.token) {
          navigate('/')
        }
      } else {
        alert("Invalid Input")
      }
    }

    if (role !== undefined && authMode === 'register') {
      if (validateForm(formData.email, formData.password, formData.firstname, formData.lastname)) {
        dispatch(userRegister(role, formData));
      }
      else {
        alert("Invalid Input")
      }
    }
  };


  useEffect(() => {

    if (usersLogin?.token) {

      if (usersData?.employee) {
        if (usersData?.employee.status === 'unregistered') {
          navigate('/employee/profile');
        } else {
          navigate('/');
        }

        return;
      }
      navigate('/');

    }
  }, [success, usersData?._id, usersData?.employee?._id])

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
          {
            RoleButtons.map((btn) => (
              <RoleButton
                key={btn.label}
                icon={btn.icon}
                label={btn.label}
                active={btn.active}
                onClick={btn.onclick}
              />
            ))
          }
        </div>

        <form onSubmit={(e) => handleSubmit(e)} className="space-y-6">

          {
            loadingData || loadingLogin || loadingRegister ?
              <Loader /> : null
          }

          {
            errorLogin || errorRegister ?
              <ErrorMessage>
                {errorLogin ? errorLogin : ''}
                {errorRegister ? errorRegister : ''}
              </ErrorMessage> : null
          }


          {
            authMode === 'register' && (

              <>

                <CustomInput
                  label="First Name"
                  type="text"
                  icon={User}
                  required
                  value={formData.firstname}
                  onChange={e => setFormData(prev => ({ ...prev, firstname: e.target.value }))}
                  placeholder="First Name"
                />


                <CustomInput
                  label="Last Name"
                  type="text"
                  icon={User}
                  required
                  value={formData.lastname}
                  onChange={e => setFormData(prev => ({ ...prev, lastname: e.target.value }))}
                  placeholder="Last Name"
                />
              </>

            )}

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

          {authMode === 'register' && role !== userType[2] &&  (
            <CustomInput
              label="Confirm Password"
              type={showPassword ? 'text' : 'password'}
              icon={Lock}
              required
              placeholder="Confirm your password"
            />
          )}

          {authMode === 'register' && role === userType[2] && (
            <CustomInput
              label="Admin Register Password"
              type={showPassword ? 'text' : 'password'}
              icon={Lock}
              value={formData.otp}
              onChange={e => setFormData(prev => ({ ...prev, otp: e.target.value }))}
              required
              placeholder="Registration password"
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
                  onClick={() => setAuthMode('register')}
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