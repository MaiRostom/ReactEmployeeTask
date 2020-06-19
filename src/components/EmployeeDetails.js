import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";
const EmployeeDetails = () => {
  let match = useRouteMatch();
  const [empData, setEmpData] = useState("");

  const listarray = useSelector((state) => {
    console.log("state", state);
    return state.employeeReducer.employeeList;
  });

  //   listarray.find(listItem=>{
  //    if ( listItem.employee_name=== match.params.employee_name){
  //   return listItem}
  // else {return listItem}})

  useEffect(() => {
    const data = listarray.find(
      (listItem) => listItem.employee_name === match.params.employee_name
    );
    console.log("EMPDATA", data);
    console.log("TEST");
    setEmpData(data);
    setTimeout(() => (console.log("EMP", empData), 5000));
  }, []);

  return (
    <div>
      <h2>You selected :{match.params.employee_name} </h2>
      <h3>Salary:{empData.employee_salary} </h3>
      <h3>Age :{empData.employee_age} </h3>
    </div>
  );
};

export default EmployeeDetails;
