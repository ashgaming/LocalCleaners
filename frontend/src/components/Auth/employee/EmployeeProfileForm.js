import React, { useEffect, useState } from 'react';
import {
  Clock, Book, Upload, Home,
  Phone
} from 'lucide-react';
import CustomInput from '../ui/CustomInput';
import CustomButton from '../ui/CustomButton';
import { BACKEND_URL, createEmployee } from '../../../redux/actions/UserActions';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ErrorMessage from '../ui/ErrorMessage';
import Loader from '../ui/Loader';
import ApiLoader from '../../ui/ApiLoader';



const EmployeeProfileForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loadingUpload, setLoadingUpload] = useState(false)
  const [uploadError, setUploadError] = useState(false)

  const { loading, error, profile: emp } = useSelector(state => state.createEmployee)
  const { user, success } = useSelector(state => state.userData)

  const [pincode, setPincode] = useState('')
  const [profile, setProfile] = useState({
    address: '',
    profileImage: '',
    experience: '',
    phoneNumber: '',
    //  skills: [],
    //  bio: ''
  });

  useEffect(() => {

    if (!user?.employee) {
      alert('Please login as Employee first')
    }

    if (success) {
      if (user?.employee?.status === 'unregistered') {
        alert('Please create yoir profile')
      } else {
        navigate('/')
      }
    }
  }, [success, navigate, user])

  const handleSubmit = (e) => {
    e.preventDefault();

    let profileData = {
      ...profile, // Spread the existing profile data
    };

    // Assuming `profile.address` exists and you want to append `pincode` to it
    profileData.address = profileData.address ? `${profileData.address}${pincode}` : pincode;

    dispatch(createEmployee(profileData));
  };

  const handleSkillsChange = (e) => {
    const skills = e.target.value.split(',').map(skill => skill.trim());
    setProfile(prev => ({ ...prev, skills }));
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    setLoadingUpload(true)


    const formData = new FormData()

    const file = e.target.files[0];

    if (!file) {
      return
    }
    formData.append('image', file);




    try {
      const response = await axios.post(`${BACKEND_URL}/image/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `bearer ${JSON.parse(localStorage.getItem('token')).token}`
        }
      });


      if (response.status === 201) {
        setUploadError(false);
        setProfile(prev => ({ ...prev, profileImage: response.data.image }))
      } else {
        throw new Error('Image upload failed. Please try again.');
      }
      setLoadingUpload(false)
    } catch (error) {
      setUploadError(error.message, 'An error occurred while uploading the image.');
      setLoadingUpload(false)
    }
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
              label="Address"
              icon={Home}
              placeholder="New York"
              value={profile.address}
              onChange={e => setProfile(prev => ({ ...prev, address: e.target.value }))}
              required
            />

            <CustomInput
              label="Pincode"
              icon={Home}
              placeholder="Pincode"
              value={pincode}
              onChange={e => setPincode(e.target.value)}
              required
            />

            {
              <CustomInput
                label="Phone Number"
                icon={Phone}
                type="tel"
                placeholder="9584548484"
                value={profile.phoneNumber}
                onChange={e => setProfile(prev => ({ ...prev, phoneNumber: e.target.value }))}
                required
              />
            }





            <CustomInput
              label="Years of Experience"
              icon={Clock}
              type="number"
              placeholder="5"
              value={profile.experience}
              onChange={e => setProfile(prev => ({ ...prev, experience: e.target.value }))}
              required
            />

            {
              /* 
             
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

             */
            }

            <div className="space-y-1">

              <label className="block text-sm font-medium text-gray-700">
                Profile Picture
              </label>
              {
                uploadError &&
                <ErrorMessage >{uploadError}</ErrorMessage>

              }
              <div className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg`} style={{ backgroundImage: `url(${profile.profileImage})` }}>
                <div className="space-y-1 text-center">
                  {
                    loadingUpload ? (<Loader />) : (<Upload className="mx-auto h-12 w-12 text-gray-400" />)
                  }


                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500">
                      <span>Upload a file</span>
                      <input type="file" className="sr-only" accept="image/*" disabled={loadingUpload} onChange={(e) => handleImageUpload(e)} />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <CustomButton type="submit" disabled={loading} fullWidth>
             { loading ? <ApiLoader /> : `Complete Profile` }
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

export default EmployeeProfileForm;