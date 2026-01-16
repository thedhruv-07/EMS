import React, { useContext, useEffect, useState } from 'react'
import './index.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  // useEffect(() => {
  //   setLocalStorage()
  //   getLocalStorage()
  // }, [])

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])

  const handleLogin = (email, password) => {
  email = email.trim().toLowerCase();
  password = password.trim();

  // ADMIN LOGIN
  if (email === "admin@me.com" && password === "123") {
    setUser("admin");
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ role: "admin" })
    );
    return;
  }

  // EMPLOYEE LOGIN (READ FROM localStorage)
  const storedData = JSON.parse(localStorage.getItem("employees"));
  const employeesList = storedData?.[0]?.employees || [];

  const employee = employeesList.find(
    (e) => e.email === email && e.password === password
  );

  if (employee) {
    setUser("employee");
    setLoggedInUserData(employee);

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({
        role: "employee",
        id: employee.id,
        data: employee
      })
    );
  } else {
    alert("invalid credentials");
  }
};



  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard changeUser={setUser} />}
      {user === "employee" ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/> : null}

    </>
  )
}

export default App