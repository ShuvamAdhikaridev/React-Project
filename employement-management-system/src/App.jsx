import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./componenets/Auth/Login";
import EmployeeDashbord from "./componenets/Dashbord/EmployeeDashbord";
import AdminDashbord from "./componenets/Dashbord/AdminDashbord";
import { useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "./Utils/LocalStorage";

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email == `admin@me.com` && password == `123`) {
      setUser(`admin`);
    } else if (email == "user@me.com" && password == 123) {
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
