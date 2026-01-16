import { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext({
  employees: [],
  admin: null,
});

const AuthProvider = ({ children }) => {
  // localStorage.clear()
  const [userData, setUserData] = useState({
    employees: [],
    admin: null,
  });

  useEffect(() => {
    setLocalStorage(); 

    const data = getLocalStorage();
    setUserData(data); 
  }, []);

  return (
    <AuthContext.Provider value={[userData,setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
