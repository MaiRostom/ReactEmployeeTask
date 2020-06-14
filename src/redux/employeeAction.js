import axios from "axios";
import { GET_DATA, POST_DATA } from "./actionTypes";

export const fetchEmployeesAction = (pageNumber) => (dispatch) => {
  axios.get(`https://reqres.in/api/users?page=${pageNumber}`).then((res) => {
    console.log("The Data", res);
    return dispatch(fetchEmployees(res.data));
  });
};
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
    .post("https://reqres.in/api/users", {
        first_name: theData.first_name,
      age: theData.age,
      email: theData.email,
      gender: theData.gender,
    })
    .then(function (response) {
      console.log("The  Added response", response);
    });

  return dispatch(addEmployees(theData));
};
