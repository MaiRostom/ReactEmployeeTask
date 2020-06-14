import React from "react";
import { Formik, Field, useField } from "formik";
import { TextField, Radio, Button } from "@material-ui/core";
import * as yup from "yup";
import { addEmployeeaction } from "../redux/employeeAction";
import { useDispatch } from "react-redux";

const MyTextField = (props) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return <TextField {...field} helperText={errorText} error={!!errorText} />;
};

const MyvalidationScheme = yup.object({
  first_name: yup.string().required().min(3),
  email: yup.string().email(),
  age: yup.number().moreThan(20),
});

const AddEmployeeForm = () => {
  const Dispatch = useDispatch();

  const addEmployee = (data) => {
    console.log("adduser name", data);
    Dispatch(addEmployeeaction(data));
  };

  return (
    <div>
      <Formik
        validateOnChange={true}
        validationSchema={MyvalidationScheme}
        initialValues={{ first_name: "", age: "", email: "", gender: "male" }}
        onSubmit={(data) => {
          addEmployee(data);
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="The Name">Name: </label>
              <MyTextField name="first_name" type="input" />
            </div>
            <div>
              <label htmlFor="The Age">Age: </label>
              <MyTextField name="age" type="input" />
            </div>
            <div>
              <label htmlFor="The Email">Email: </label>
              <MyTextField name="email" type="input" />
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
    </div>
  );
};

export default AddEmployeeForm;
