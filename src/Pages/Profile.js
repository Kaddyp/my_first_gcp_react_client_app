// src/components/Profile.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from '../api/axios';

const Profile = (props) => {
  console.log(props);
  const {user} = props;
  const [profile, setProfile] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
       try {
         const response = axios.post('/users/profile/', { user }, { 
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${user}`,
            }
          }).then(response => {
            console.log(response);
            setProfile(response.data);   
            //setCookie('user', response.data.userResponse, { path: '/' })     
          })
          .catch(error => {
            console.error('Error logging in:', error);
            navigate('/');
          })
          .finally(() => {
            // always executed
          });
       } catch (error) {
         console.error('Failed to fetch profile', error);
       }    
     };

     fetchProfile();
  }, []);

  if (!user) {
    return (<div>
      <h3>Loading...!</h3>
      <h3>Click here <a href='/'>SingIn</a></h3>
    </div>);
  }

  return (
    <div>
      <h1>Welcome, {user.Name}</h1>
      {/* Other user profile information */}
    </div>
  );
};

export default Profile;
