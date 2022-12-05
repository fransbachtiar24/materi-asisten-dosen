import axios from "axios";
import { toast } from "react-toastify";
import { setToken } from "../reducer/authReducers";

// register
export const register = (data) => async (dispatch) => {
  try {
    const results = await axios.post(
      `${process.env.REACT_APP_MHS_API}/mahasiswa/auth/register`,
      data
    );
    if (results.data.token) {
      localStorage.setItem("token", results.data.token);
      dispatch(setToken(results.data.token));
      toast.success("Register Success !");
    }
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

// login
export const login = (data) => async (dispatch) => {
  try {
    const results = await axios.post(
      `${process.env.REACT_APP_MHS_API}/mahasiswa/auth/login`,
      data
    );
    if (results.data.token) {
      localStorage.setItem("token", results.data.token);
      dispatch(setToken(results.data.token));
      return;
    }
  } catch (error) {
    toast.error(error.response.data.message);
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch(setToken(null));
};
