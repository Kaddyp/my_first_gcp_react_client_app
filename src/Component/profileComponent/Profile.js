import React, { useEffect } from 'react';
//import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';


function Profile() {
  const navigate = useNavigate();

  useEffect(() => {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      //Check if the user is already logged in
      if (isLoggedIn == null) {
        navigate('/signIn');
      } 
      else{
        // Redirect to home page if the user is not logged in
        navigate('/profile');  // replace '/' with the path of your home page
      }
  }, [navigate]);


  return (
    <div>
      <h2>Profile</h2>
    </div>
  );
}
export default Profile;




// else{
//   // Fetch user's profile
//    axios.post('/users/profile/', { userLoggedInId }, { withCredentials: true })
//   .then(response => {
//      console.log(response.data);
//      // setIsLoggedIn(response.data.isLoggedIn);
//    })
//   .catch(error => {
//      console.error('Error logging in:', error);
//    });
//  }