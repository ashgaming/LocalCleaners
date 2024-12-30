import axios from "axios";
import { BACKEND_URL } from "../../../redux/actions/UserActions";

export const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
  
    const pad = (num) => num.toString().padStart(2, '0');
  
    return `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
  };


  export const verifyOTP = async (_id,otp,title) => {
      const token = JSON.parse(localStorage.getItem('token'))?.token || null;
      const Urls = {
        'Start':`${BACKEND_URL}/employes/verify-booking-otp`,
        'End':`${BACKEND_URL}/employes/complete-Work`
      }
      const response = await axios.get(Urls[title],{
        params:{  
          _id,
          otp
        },
        headers:{
          Authorization:`Bearer ${token}`
        }
      })

      console.log(response.data)


      return response.data?.verifyStatus?.verify
     
  };

  
  export const processOnlinePayment = async (data) => {
    // Simulate payment processing
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  };
  
  export const processCashPayment = async (amount) => {
    // Simulate cash payment processing
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  };