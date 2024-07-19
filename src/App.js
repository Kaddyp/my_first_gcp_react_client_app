import React from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
import NoMatch from './Pages/NoMatch';
import Layout from './Pages/Layout';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import Logout from './Pages/Logout';
import { CookiesProvider, useCookies } from 'react-cookie'
import axios from './api/axios';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  const navigate = useNavigate();

  function handleLogin(user) {
    axios.post('/auth/login', { user }, { withCredentials: true })
      .then(response => {
        navigate('/profile');
        console.log(response.data);   
        setCookie('user', response.data.userResponse, { path: '/' })     
      })
      .catch(error => {
        console.error('Error logging in:', error);
      })
      .finally(() => {
        // always executed
      });
  }

  function handleLogout(user) {
      axios.post('/users/profile/', { user }, { 
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user}`,
        }
      }).then(response => {
        navigate('/');
        console.log(response.data);   
        removeCookie('user');     
      })
      .catch(error => {
        console.error('Error logging in:', error);
        navigate('/');
      })
      .finally(() => {
        // always executed
      });
  }

  return (
   <CookiesProvider>
      <div className="App">
        <div className="d-flex h-100 text-center text-bg-dark">
          <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        

            {/* Routes nest inside one another. Nested route paths build upon
              parent route paths, and nested route elements render inside
              parent route elements. See the note about <Outlet> below. */}
            <Routes>
              <Route path="/" element={<Layout user={cookies.user} onLogout={handleLogout}/>}>
                <Route index element={<SignIn onLogin={handleLogin}/>} />             
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/profile" element={<Profile user={cookies.user}/>} /> 
                <Route path="/logout" element={<Logout />} />                 
                {/* Using path="*"" means "match anything", so this route
                        acts like a catch-all for URLs that we don't have explicit
                        routes for. */}
                <Route path="*" element={<NoMatch />} />
              </Route>
            </Routes>

        
          </div>
        </div>
      </div>
      </CookiesProvider>
  );
}

export default App;
