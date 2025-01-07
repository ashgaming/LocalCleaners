import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BACKEND_URL } from '../../redux/actions/UserActions';

const SubScriptionDetails = ({id}) => {
    
    const [details,setDetails] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    const token = JSON.parse(localStorage.getItem('token')).token || null

    useEffect(()=>{
    async function fetchData() { 
        try{
            setLoading(true)
            const {data} =  await axios.get(`${BACKEND_URL}/subscritions/details`,{
                params:{
                    id
                },
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
            })

            setDetails(data.details)
        } catch(err){
            setError(err)
        }finally{
            setLoading(false)
        }
    }

    fetchData();
    },[])
  return (
    <div>
      
    </div>
  )
}

export default SubScriptionDetails
