import { GET_USER_INFO } from "./containers";

const defaultState = {
  userInfo: []
};

export function reducer(state = defaultState, action) {
  switch (action.type) {
    case GET_USER_INFO:
      const newState = {
        ...state,
        userInfo: action.userInfo
      };
      return newState;
    default:
      return state;
  }
}
