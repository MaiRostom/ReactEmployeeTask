import axios from 'axios';
import {GET_DATA,POST_DATA} from "./actionTypes";


export const  fetchEmployeesAction=(pageNumber)=>dispatch=>{

axios.get(`https://reqres.in/api/users?page=${pageNumber}`).then(res=>{
    console.log("The Data",res);
    return dispatch(
        fetchEmployees(res.data)
    );
    
})}
const fetchEmployees=(theData)=>({
    type:GET_DATA,
    payload:theData})
    
   export const addEmployees=({ID,NAME,AGE})=>(
    {
        type:POST_DATA,
        payload:{ID,NAME,AGE}
        }
        )

export const addUserAction=({ID,NAME,AGE})=>dispatch=>{
    console.log("addEmployeeaction name",NAME);

    axios.post('https://reqres.in/api/users', {
       ID:ID,
       NAME:NAME,
       AGE:AGE

      })
      .then(function (response) {
        console.log("The  Added response",response);
      })
      return dispatch(
        addEmployees({ID,NAME,AGE})
    );
}
