import axios from 'axios';
axios.defaults.withCredentials = true; // Ensure this is correctly spelled

export async function onRegistration(registrationData) {
    return await axios.post(
      
        `${import.meta.env.VITE_BASE_URL}/auth/register`,
        registrationData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      
}
export async function onLogin(loginData) {
    return await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/login`,
        loginData
    )
}
export async function onLogout() {
    return await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/logout`,
    )
    
}

export async function forgotPassword(data) {
    return await axios.post(
      `${import.meta.env.VITE_BASE_URL}/auth/forgot_password`,
      data
    )
}

export async function resetPassword(data) {
  return await axios.post(
    `${import.meta.env.VITE_BASE_URL}/auth/reset_password`,
    data
  )
}
