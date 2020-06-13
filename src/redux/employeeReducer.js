import { GET_DATA, POST_DATA } from "./actionTypes";

const initialState = {
  employeeList: [],
};
function employeeReducer(state = initialState, action) {
  console.log("action", action);
  console.log("the state", state);
  switch (action.type) {
    case GET_DATA:
      let newData = action.payload.data;
      let newState = { ...state, employeeList: newData };

      console.log("new state", newState);
      return newState;

    case POST_DATA:
      console.log("Payload", action.payload);
      console.log("action", action);
      const { ID, NAME, AGE } = action.payload;
      let addedState = {
        ...state,
        employeeList: [...state.employeeList, { ID, NAME, AGE }],
      };
      console.log("new state", addedState);
      return addedState;
    default:
      return state;
  }
}
export default employeeReducer;
