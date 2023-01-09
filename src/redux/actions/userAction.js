import { userService } from "../../services/userServices";
import { USER_ACTION } from "./types/userTypes";
import { createAction } from ".";

export const logInAction = (loginInfo) => {
  return async (dispatch) => {
    try {
      const result = await userService.logIn(loginInfo);
      // console.log(result);
      dispatch(createAction(USER_ACTION.LOGIN, result.data));
      return result.data;
    } catch (err) {
      return err.responce.statusMessage;
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

export const signUpAction = (signupInfo) => {
  return async (dispatch) => {
    try {
      const result = await userService.signUp(signupInfo);
      // dispatch(createAction(USER_ACTION.SIGN_UP));
      return result.data;
    } catch (err) {
      return err.responce;
    }
  };
};
