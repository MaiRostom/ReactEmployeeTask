import { GET_DATA, POST_DATA, ERROR_DATA, PENDING } from "./actionTypes";

const initialState = {
  employeeList: [],
  isLoading: false,
  error: "",
};
function employeeReducer(state = initialState, action) {
  console.log("action", action);
  console.log("the state", state);
  switch (action.type) {
    case GET_DATA:
      let newData = action.payload.data;
      let newState = { ...state, employeeList: newData, isLoading: false,error:"" };

      console.log("new state", newState);
      return newState;

    case POST_DATA:
      console.log("Payload", action.payload);
      console.log("action", action);
    //  const { name, age, email, gender ,salary} = action.payload;
    const postData=action.payload;
      let addedState = {
        ...state,
        employeeList: [
          ...state.employeeList,
          // { name, age, email, gender,salary },
          postData
        ],
      };
      console.log("new state", addedState);
      return addedState;

    case PENDING:
      return { ...state,employeeList:[], isLoading: true,error:"" };

    case ERROR_DATA:
      let errorState = { ...state, employeeList: [], isLoading: false, error:"There is an Error ,Please try again Later"
       };
      return errorState

    default:
      return state;
  }
}
export default employeeReducer;
