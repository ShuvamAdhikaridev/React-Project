import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center  h-screen w-screen ">
      <div className="border-2 border-emerald-600 rounded-xl p-20">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className=" bg-transparent outline-none border-2 border-emerald-600 text-xl  py-4 px-5 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className=" bg-transparent outline-none border-2 border-emerald-600 mt-3 text-xl  py-4 px-5 rounded-full placeholder:text-gray-400"
            type="password"
            placeholder="Enter your password"
          />
          <button className="text-white outline-none border-2 bg-emerald-600 mt-3 text-xl  py-4 px-5 rounded-full placeholder:text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
