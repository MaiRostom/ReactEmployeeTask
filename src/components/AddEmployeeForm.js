import React,{useState} from "react";
import { Formik, Field, useField } from "formik";
import { TextField, Radio, Button } from "@material-ui/core";
import * as yup from "yup";
import { addEmployeeaction } from "../redux/employeeAction";
import { useDispatch } from "react-redux";
import {Redirect} from "react-router-dom";

const MyTextField = (props) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return <TextField {...field} helperText={errorText} error={!!errorText} />;
};

const MyvalidationScheme = yup.object({
  employee_name: yup.string().required().min(3),
  Email: yup.string().email(),
  employee_age: yup.number().moreThan(20),
  Salary:yup.number().integer()
});

const AddEmployeeForm = () => {
  const Dispatch = useDispatch();
const [isSubmitted,setSubmitted]=useState(false);
  const addEmployee = (data) => {
    console.log("adduser name", data);
    Dispatch(addEmployeeaction(data));
  };
 

  return (
    <div>
       
      <Formik
        validateOnChange={true}
        validationSchema={MyvalidationScheme}
        initialValues={{ employee_name: "", employee_age: "", Email: "",employee_salary:"", gender: "male" }}
        onSubmit={(data) => {
          addEmployee(data);
          setSubmitted(true);
          console.log("submitt",isSubmitted);
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="The Name">Name: </label>
              <MyTextField name="employee_name" type="input" />
            </div>
            <div>
              <label htmlFor="The Age">Age: </label>
              <MyTextField name="employee_age" type="input" />
            </div>
            <div>
              <label htmlFor="The Email">Email: </label>
              <MyTextField name="Email" type="input" />
            </div>
            <div>
              <label htmlFor="The salary">Salary: </label>
              <MyTextField name="employee_salary" type="input" />
            </div>

            <div>
              <label htmlFor="The Gender">Gender: </label>
              <Field name="gender" value="male" type="radio" as={Radio} />
              <label htmlFor="male">Male</label>
              <Field name="gender" value="female " type="radio" as={Radio} />
              <label htmlFor="female">Female</label>
            </div>

            <Button type="onSubmit">Submit</Button>
          </form>
          
        )}
      
      </Formik>
      {isSubmitted &&<Redirect to="/" /> }
    </div>
  );
};

export default AddEmployeeForm;
