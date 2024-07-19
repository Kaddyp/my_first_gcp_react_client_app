import { useState, useEffect } from 'react';

export default function useSession() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  // const getSession = () => {
  //   const tokenString = localStorage.getItem('isLoggedIn');
  //   const userToken = tokenString;
  //   return userToken?.isLoggedIn
  // };

  // const [isLoggedIn, setIsLoggedIn] = useState(getSession());
 
  // const saveSession = userToken => {
  //   console.log(userToken)
  //   localStorage.setItem('isLoggedIn', userToken);
  //   setIsLoggedIn(userToken.isLoggedIn);
  // };

  useEffect(() => {
    const storedUser = localStorage.getItem('isLoggedIn');
    if (storedUser) {
      setIsLoggedIn(JSON.parse(storedUser));
    }
  }, []);

  const login = (value) => {
    localStorage.setItem('isLoggedIn', value);
    setIsLoggedIn(value);
  };

  const logout = () => {
    setIsLoggedIn(null);
    localStorage.setItem('isLoggedIn', "");
  };


  return {
    isLoggedIn, setIsLoggedIn, login, logout
  }

}