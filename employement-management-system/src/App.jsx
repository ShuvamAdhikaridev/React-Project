import { useContext, useState } from "react";
import "./App.css";
import Login from "./componenets/Auth/Login";
import EmployeeDashbord from "./componenets/Dashbord/EmployeeDashbord";
import AdminDashbord from "./componenets/Dashbord/AdminDashbord";

import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");

  //     if (loggedInUser) {
  //       setUser(loggedInUser.role);
  //     }
  //   }
  // }, [authData]);

  const handleLogin = (email, password) => {
    if (email == `admin@me.com` && password == `123`) {
      setUser(`admin`);
      localStorage.setItem(`loggedInUser`, JSON.stringify({ role: `admin` }));
    } else if (authData) {
      const employee = authData.employees.find(
        (e) => email == e.email && e.password == password
      );
      if (employee) {
        setUser(`employee`);
        setLoggedInUserData(employee);
        localStorage.setItem(
          `loggedInUser`,
          JSON.stringify({ role: `employee` })
        );
      }
    } else {
      alert(`Invalid Credentials`);
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ``}
      {user === "admin" ? (
        <AdminDashbord />
      ) : user === "employee" ? (
        <EmployeeDashbord data={loggedInUserData} />
      ) : null}
    </>
  );
}

export default App;
