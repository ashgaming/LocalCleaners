import React, { useState } from 'react';
import { Banknote, Loader } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { GetStaffToPaySubCash } from '../../redux/actions/paymentActions';
import { useParams } from 'react-router-dom';

const CashPayment = ({otp,setOtp}) => {

  const [staffid, setStaffId] = useState('')
  const dispatch = useDispatch()
  const {id} = useParams()
  const { staff , loading , success , error } = useSelector(state=>state.getStaffToPaySubCash)


  const HandleEmailChange = (e) => {
    e.preventDefault()
    setStaffId(e.target.value)
  }

  const getStaffHandler = (e) =>{
    e.preventDefault()

    dispatch(GetStaffToPaySubCash(staffid,id))
  }


  return (
    <form className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
      <div className="flex items-center gap-3 mb-3">
        <Banknote className="w-5 h-5 text-yellow-600" />
        <h3 className="font-medium text-yellow-800">Cash Payment Instructions</h3>
      </div>
      <p className="text-sm text-yellow-700">
        Please visit our nearest office to complete the cash payment. Bring the following reference number:
      </p>

      {
        error && <p>{error}</p>
      }

      <input
        className="mt-2 font-mono text-lg text-center bg-white p-2 rounded border border-yellow-200"
        type='email' placeholder='Staff ID' value={staffid} onChange={(e) => HandleEmailChange(e)} />

      <button disabled={loading} className='bg-slate-300 m-2' onClick={(e) => getStaffHandler(e)}> 
        { loading ? <Loader /> : 'Enter' }
      </button>

      {
        success && staff?._id &&
        <>
          <input
            className="mt-2 font-mono text-lg text-center bg-white p-2 rounded border border-yellow-200"
            type='email' placeholder='Otp' value={otp} onChange={(e) => setOtp(e.target.value)} />
        </>
      }
    </form>
  );
};

export default CashPayment;