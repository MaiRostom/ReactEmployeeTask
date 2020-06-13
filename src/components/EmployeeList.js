import React, { useEffect } from "react";
import { fetchEmployeesAction } from "../redux/employeeAction";
import { useDispatch, useSelector } from "react-redux";
import SimpleCard from "./SimpleCard";

const UsersList = () => {
  const Dispatch = useDispatch();

  useEffect(() => {
    Dispatch(fetchEmployeesAction(2));
  }, [Dispatch]);

  const listarray = useSelector((state) => {
    console.log("state", state);
    return state.employeeReducer.employeeList;
  });
  console.log("list", listarray);

  return (
    <div>
      <SimpleCard/>
    </div>
  );
};

export default UsersList;
