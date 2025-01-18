// sessionUtils.js

const SESSION_KEY = 'token';
const EXPIRY_KEY = 'tokenExpiry';

// Set session with data and a 24-hour expiry
export const setUserSession = (data) => {
    const expiryTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours from now
    localStorage.setItem(SESSION_KEY, JSON.stringify(data));
    localStorage.setItem(EXPIRY_KEY, expiryTime.toString());
};

// Get session data if valid, otherwise null
export const getUserSession = () => {
    const expiryTime = parseInt(localStorage.getItem(EXPIRY_KEY), 10);
    const currentTime = new Date().getTime();

    if (currentTime > expiryTime) {
        clearUserSession(); // Clear expired session
        return null;
    }

    const sessionData = localStorage.getItem(SESSION_KEY);
    return sessionData ? JSON.parse(sessionData) : null;
};

// Clear session
export const clearUserSession = () => {
    localStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(EXPIRY_KEY);
};
