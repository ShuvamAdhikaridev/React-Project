import React from "react";
import Header from "../Others/Header";
import TaskListNumber from "../Others/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashbord = ({ data }) => {
  return (
    <>
      <div className="p-10 bg-[#1c1c1c] h-screen">
        <h1>{data.id}</h1>
        <Header />
        <TaskListNumber />
        <TaskList />
      </div>
    </>
  );
};

export default EmployeeDashbord;
