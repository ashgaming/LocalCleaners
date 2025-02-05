import axios from "axios"
import { BACKEND_URL } from "../redux/actions/UserActions"
import { useState } from "react"

const token = JSON.parse(localStorage.getItem('token'))?.token || ''

export const FetchData = async (url) => {
    const [loading, SetLoading] = useState(false)
    const [error, SetError] = useState(false)
    const [data, SetData] = useState(false)
    const [success, SetSuccess] = useState(false)
    SetLoading(true)
    try {
        const response = await axios.get(`${BACKEND_URL}${url}`,
            {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
            }
        )

        SetData(response.data)
        SetSuccess(true)


    } catch (error) {
        alert('Failed to send payment otp')
        SetError(error.message)
    }

    SetLoading(false)

    return { loading, error, success, data }

}


export const TodaysBookings = async (setBookings, setError) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/bookings/todays-booking`,
            {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
            }
        )

        setBookings(response.data.data)
        return
    } catch (error) {
        setError(error.message)
    }


}

export const HistoryBookings = async (setBookings, setError) => {
    try {
        const response = await axios.get(`${BACKEND_URL}/bookings/todays-booking`,
            {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
            }
        )

        setBookings(response.data.data)
        return
    } catch (error) {
        setError(error.message)
    }


}

export const getEmployeesPaymentCode = async () => {
    console.log(token)

    try {
        const response = await axios.get(`${BACKEND_URL}/employes/get-payment-code`,
            {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
            }
        )

        alert('Payment send to your email')


    } catch (error) {
        alert('Failed to send payment otp')
    }


}

