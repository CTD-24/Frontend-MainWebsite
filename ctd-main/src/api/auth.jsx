import axios from 'axios';
axios.defaults.withCredentials = true; // Ensure this is correctly spelled

export async function onRegistration(registrationData) {
    return await axios.post(
        'http://localhost:3000/auth/register',
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
        'http://localhost:3000/auth/login',
        loginData
    )
}
export async function onLogout() {
    return await axios.get(
        'http://localhost:8000/auth/logout',
    )
}
// export async function getchProtectedInfo() {
//     return await axios.get(
//         'http://localhost:8000/api/protected',
//     )
// }
