import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import useSession from './customHook/useSession';
import Cover from './coverComponent/Cover';
import Home from './homeComponent/Home';
import SignIn from './signInComponent/SignIn';
import SignUp from './signUpComponent/SignUp';
import Profile from './profileComponent/Profile';
import Logout from './logoutComponent/Logout';
import NoMatch from './NoMatch';


function App() {
  const {isLoggedIn} = useSession();
  console.log(isLoggedIn); 

  return (
   
      <div className="App">
        <div className="d-flex h-100 text-center text-bg-dark">
          <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            

            {/* Routes nest inside one another. Nested route paths build upon
              parent route paths, and nested route elements render inside
              parent route elements. See the note about <Outlet> below. */}
            <Routes>
              <Route path="/" element={<Cover />}>
                <Route index element={<Home />} />             
                <Route path="/signIn" element={ <SignIn /> } />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/profile" element={<Profile />} />
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

  );
}

export default App;
