import React from "react";
import "./App.css";
import { fetchEmployeesAction } from "../src/redux/employeeAction";
import {useEffect} from 'react'
import { useDispatch} from "react-redux";
import { BrowserRouter, NavLink, Switch, Route } from "react-router-dom";
import ShowEmployeesList from "./components/ShowEmployeesList";
import AddEmployeeForm from "./components/AddEmployeeForm";
import  EmployeeDetails from "./components/EmployeeDetails";
function App() {
  const Dispatch = useDispatch();
 
  useEffect(() => {
    Dispatch(fetchEmployeesAction());
  }, []);
  return (
    
    <BrowserRouter>
      <div className="App">
        <NavLink to="/addEmployee">
          <h1>Add Employee</h1>
        </NavLink>
        

        
        
        <Switch>
          <Route exact path="/">
            <ShowEmployeesList />
          </Route>
          <Route path="/addEmployee">
            <AddEmployeeForm />
          </Route>
         
          <Route path={`/EmployeesList/:employee_name`}>
            <EmployeeDetails />
          
        </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
