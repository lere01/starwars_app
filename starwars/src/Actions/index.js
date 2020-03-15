import Axios from "axios";

export const getAll = () => dispatch => {
  const url = "https://swapi.co/api/people";
  Axios.get(url)
    .then(response => {
      dispatch({
        type: "UPDATE_ALL_PERSONS",
        payload: response.data.results
      });
    })
    .catch(error => {
      return error;
    });
};

export const getPerson = async url => {
  const result = await Axios.get(url);
  return result.data;
};
