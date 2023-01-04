import { userService } from "../../services/userServices";
import { USER_ACTION } from "./types/userTypes";
import { createAction } from ".";

export const logInAction = (loginInfo, callback) => {
  return async (dispatch) => {
    try {
      const result = await userService.logIn(loginInfo);
      console.log(result);
      dispatch(createAction(USER_ACTION.LOGIN, result.data));
      callback();
    } catch (err) {
      return err.response.statusText;
    }
  };
};

export const logOutAction = (callback) => {
  return (dispatch) => {
    try {
      dispatch(createAction(USER_ACTION.LOGOUT));
      callback();
    } catch (err) {
      console.log("err:", err);
    }
  };
};

export const signUpAction = (loginInfo, callback) => {
  return async (dispatch) => {
    try {
      const result = await userService.signUp(loginInfo);
      dispatch(createAction(USER_ACTION.SIGN_UP));
      callback();
    } catch (err) {
      console.log("err:", err);
    }
  };
};
