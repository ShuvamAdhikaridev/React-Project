import React from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";

const AdminDashbord = () => {
  return (
    <div className="h-screen w-full p-10">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashbord;
{
  /* <div>
<form className="flex flex-wrap w-full bg-red-200 items-start justify-between">
  <div className="w-1/2">
    {" "}
    <div>
      <h3>Task Tittle</h3>
      <input type="text" placeholder="Make a UI design" />
    </div>
    <div>
      <h3>Date</h3>
      <input type="date" />
    </div>
    <div>
      <h3>Asign to </h3>
      <input type="text" placeholder="employee name" />
    </div>
    <div>
      <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
      <input
        className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
        type="text"
        placeholder="design, dev, etc"
      />
    </div>
  </div>
  <div className="w-2/5 flex flex-col items-start">
    <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
    <textarea
      className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 "
      name=""
      id=""
    ></textarea>
  </div>
  <button className="bg-emrald-500 py-3 hover:bg-emerald-500 px-5 rounded text-sm mt-4 w-full">
    Create Task
  </button>
</form>
</div> */
}
