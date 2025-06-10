import React from "react";

const Login = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <div className="flex items-center justify-center  h-screen w-screen ">
      <div className="border-2 border-emerald-600 rounded-xl p-20">
        <form className="flex flex-col items-center justify-center">
          <input
            required
            className=" bg-transparent outline-none border-2 border-emerald-600 text-xl  py-4 px-5 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            required
            className=" bg-transparent outline-none border-2 border-emerald-600 mt-3 text-xl  py-4 px-5 rounded-full placeholder:text-gray-400"
            type="password"
            placeholder="Enter your password"
          />
          <button className="text-white  mt-5 outline-none border-2 bg-emerald-600 mt-3 text-xl  py-4 px-5 rounded-full placeholder:text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
