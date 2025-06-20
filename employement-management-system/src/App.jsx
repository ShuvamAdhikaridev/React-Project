import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./componenets/Auth/Login";
import EmployeeDashbord from "./componenets/Dashbord/EmployeeDashbord";
import AdminDashbord from "./componenets/Dashbord/AdminDashbord";
import { useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "./Utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  const handleLogin = (email, password) => {
    if (email == `admin@me.com` && password == `123`) {
      setUser(`admin`);
    } else if (
      authData &&
      authData.employees.find((e) => email == e.email && e.password == password)
    ) {
      setUser(`employee`);
    } else {
      alert(`Invalid Credentials`);
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ``}
      {user == `admin` ? <AdminDashbord /> : <EmployeeDashbord />}
      {/* <EmployeeDashbord /> */}
      {/* <AdminDashbord /> */}
    </>
  );
}

export default App;
