import axios from "axios";

const setAuthToken = token => {
  if (token) {
    //Apply to evey request
    axios.defaults.header.common["Authorization"] = token;
  } else {
    //Delete Auth Header
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
