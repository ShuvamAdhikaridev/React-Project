import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./componenets/Auth/Login";
import EmployeeDashbord from "./componenets/Dashbord/EmployeeDashbord";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Login /> */}
      <EmployeeDashbord />
    </>
  );
}

export default App;
