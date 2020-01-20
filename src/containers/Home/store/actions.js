import { CHANGE_LIST } from "./constants";

// action creater
const cahngeList = list => ({
  type: CHANGE_LIST,
  list
});

export const getHomeList = () => {
  return (dispatch, getState, axios) => {
    return axios.get("/mockApi/homeList").then(res => {
      dispatch(cahngeList(res.data.data));
    });
  };
};
