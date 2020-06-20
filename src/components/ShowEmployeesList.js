import React from "react";
import { useSelector } from "react-redux";
import EmployeesList from "./EmployeesList";
const ShowEmployeesList = () => {

  const listarray = useSelector((state) => {
    console.log("state", state);
    return state.employeeReducer.employeeList;
  });
  console.log("list", listarray);

  return (
    <div>
      <EmployeesList/>
      
     
    </div>
  );
};

export default ShowEmployeesList;
