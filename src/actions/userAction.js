import axios from "axios";

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_AGE = "UPDATE_AGE";

export const updateName = (name) => {
  return {
    type: UPDATE_NAME,
    payload: name
  };
};

export const updateAge = (age) => {
  return {
    type: UPDATE_AGE,
    payload: age
  };
};

export const getApiData = () => {
  return async (dispatch, getState) => {
    try {
      const url = "http://www.bluecode.jp/test/api.php";
      const res = await axios.get(url);
      const json = res.data;
      dispatch({
        type: UPDATE_NAME,
        payload: json.message
      });
    } catch (e) {
      alert(e);
    }
  };
};
