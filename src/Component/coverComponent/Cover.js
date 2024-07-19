/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Outlet } from 'react-router-dom';
import './Cover.css';
import { NavLink } from "react-router-dom";
import useSession from '../customHook/useSession';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

function Cover() {
    const navigate = useNavigate();
    //const [ isLoggedIn, setIsLoggedIn ] = useState();
    const { isLoggedIn, logout } = useSession();
    
    const handleLogout = () => {
      axios.post('/auth/logout', { withCredentials: true })
      .then(response => {
        console.log(response);
        logout();
        navigate('/');
      })
      .catch(error => {
        console.error('Error logging in:', error);
      })
      .finally(() => {
        // always executed
      });
    }
 
    // useEffect(()=>{
    //    // console.log('Effect isLoggedIn value',isLoggedIn);
    //    const value = localStorage.getItem('isLoggedIn');
    //    setIsLoggedIn(value);
    // }, [isLoggedIn, setIsLoggedIn]);

    return (
        <>
        <header className="my-5">
            <div>
              <h3 className="float-md-start mb-0">Application for session handling</h3>
              <nav className="nav nav-masthead justify-content-center float-md-end">
                    <NavLink to="/" className={({ isActive }) => isActive ? "nav-link fw-bold py-1 px-0 active" : 'nav-link fw-bold py-1 px-0'} >Home</NavLink>
                    {!isLoggedIn ? (
                        <>
                          <NavLink to="/signIn" className={({ isActive }) => isActive ? "nav-link fw-bold py-1 px-0 active" : 'nav-link fw-bold py-1 px-0'} >Sign In</NavLink>
                          <NavLink to="/signUp" className={({ isActive }) => isActive ? "nav-link fw-bold py-1 px-0 active" : 'nav-link fw-bold py-1 px-0'} >Sign Up</NavLink>
                        </>
                      )
                    : (
                      <>
                        <NavLink to="/profile" className={({ isActive }) => isActive ? "nav-link fw-bold py-1 px-0 active" : 'nav-link fw-bold py-1 px-0'} >Profile</NavLink>
                        <NavLink to="/logout" className={({ isActive }) => isActive ? "nav-link fw-bold py-1 px-0 active" : 'nav-link fw-bold py-1 px-0'} onClick={handleLogout}>Logout</NavLink>
                      </>
                      )}                   
              </nav>
            </div>
        </header>
        <main className="px-3 py-3 my-5 m-auto " style={{ width: '40%' }}>
            {/* An <Outlet> renders whatever child route is currently active,
                so you can think about this <Outlet> as a placeholder for
                the child routes we defined above. */}
            <Outlet />
        </main>  
        </>  
    );
}

export default Cover;