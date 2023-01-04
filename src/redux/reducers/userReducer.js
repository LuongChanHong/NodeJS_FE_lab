import { USER_ACTION } from "../actions/types/userTypes";

const initialState = {
  isLogin: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACTION.LOGIN:
      state.isLogin = action.payload;
      return { ...state };
    case USER_ACTION.LOGOUT:
      state.isLogin = false;
      return { ...state };

    default:
      return state;
  }
};

export default reducer;
