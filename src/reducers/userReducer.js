import { UPDATE_NAME, UPDATE_AGE } from "../actions/userAction";

const initialState = {
  name: "hoge",
  age: 33
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      let nameState = { ...state };
      nameState.name = action.payload;
      return nameState;
    case UPDATE_AGE:
      let ageState = { ...state };
      ageState.age = action.payload;
      return ageState;
    default:
      return state;
  }
};

export default user;
