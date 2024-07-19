import { createContext } from "react";
export const AuthContext = createContext({
    isLoggedIn: null,
    setIsLoggedIn: () => {},
});