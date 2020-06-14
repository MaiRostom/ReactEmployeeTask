import React from 'react';
import './App.css';
import ShowEmployeesList from "./components/ShowEmployeesList";
import AddEmployeeForm from "./components/AddEmployeeForm";

function App() {
  return (
    <div className="App">
      <ShowEmployeesList/>
      <AddEmployeeForm/>
      
      
    </div>
  );
}

export default App;
