import { GET_USER_INFO } from "./containers";

// action creater
const changeUserInfo = userInfo => ({
  type: GET_USER_INFO,
  userInfo
});

export const getUserInfo = () => {
  return (dispatch, getState, axios) => {
    return axios.get("/mockApi/userInfo").then(res => {
      dispatch(changeUserInfo(res.data.data));
    })
  };
};
