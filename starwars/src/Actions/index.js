import Axios from "axios";

export const getAll = () => dispatch => {
  const url = "https://swapi.dev/api/people/";
  Axios.get(url)
    .then(response => {
      dispatch({
        type: "UPDATE_ALL_PERSONS",
        payload: response.data.results
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const getPerson = async url => {
  const url2 = "https://swapi.dev/api/people/" + url;
  const result = await Axios.get(url2);
  return result.data;
};
