/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Outlet } from 'react-router-dom';
import './Cover.css';
import { NavLink } from "react-router-dom";


function Layout(props) {
    const { user } = props;
    const handleLogout = (event) => {
        event.preventDefault();
        props.onLogout(user);    
    };
    return (
        <>
        <header className="my-5">
            <div>
              <h3 className="float-md-start mb-0">Application for session handling</h3>
              <nav className="nav nav-masthead justify-content-center float-md-end">
              {!user && (
                <>                
                    <NavLink to="/" className={({ isActive }) => isActive ? "nav-link fw-bold py-1 px-0 active" : 'nav-link fw-bold py-1 px-0'} >Sign In</NavLink>
                    <NavLink to="/signUp" className={({ isActive }) => isActive ? "nav-link fw-bold py-1 px-0 active" : 'nav-link fw-bold py-1 px-0'} >Sign Up</NavLink>
                </>
              )}
              {user && (
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

export default Layout;