import axios from "axios";
import { GET_DATA, POST_DATA, ERROR_DATA,PENDING } from "./actionTypes";

export const fetchEmployeesAction = () => (dispatch) => {
  dispatch(fetchLoading())
  axios.get(`http://dummy.restapiexample.com/api/v1/employees`
  ).then((res) => {
    console.log("The Data", res);
    return dispatch(fetchEmployees(res.data));
  }).catch(error => {
    console.log("ERROR",error)
    return dispatch(fetchError(error));
  })
};
const fetchLoading = () => ({
  type: PENDING
   
});
const fetchError = (error) => ({
  type: ERROR_DATA,
  payload: error
});
const fetchEmployees = (theData) => ({
  type: GET_DATA,
  payload: theData,
});

export const addEmployees = (theData) => ({
  type: POST_DATA,
  payload: theData,
});

export const addEmployeeaction = (theData) => (
  dispatch
) => {
  axios
    .post("http://dummy.restapiexample.com/api/v1/create", {
      name: theData.employee_name,
      age: theData.employee_age,
      email: theData.Email,
      gender: theData.gender,
      salary:theData.employee_salary
    })
    .then(function (response) {
      console.log("The  Added response", response);
    });

  return dispatch(addEmployees(theData));
};
