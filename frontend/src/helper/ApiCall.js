import axios from "axios"
import { BACKEND_URL } from "../redux/actions/UserActions"

const token = JSON.parse(localStorage.getItem('token')).token || null
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