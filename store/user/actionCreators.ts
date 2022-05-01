import { RootState } from "..";
import { POST, setToken } from "../request/actionCreators";
import * as actionTypes from "./actionTypes"

export const setSignUpFormField = (payload: SetFieldAction) =>
  ({ type: actionTypes.SET_SIGNUP_FORM_FIELD, payload });

export const validateSignUpForm = (payload: ValidateFormAction) =>
  ({ type: actionTypes.VALIDATE_SIGNUP_FORM, payload });

export const setSignInFormField = (payload: SetFieldAction) =>
  ({ type: actionTypes.SET_SIGNIN_FORM_FIELD, payload });

export const validateSignInForm = (payload: ValidateFormAction) =>
  ({ type: actionTypes.VALIDATE_SIGNIN_FORM, payload });

  export const postSignInStatus = (payload: any) =>
  ({ type: actionTypes.POST_SIGNIN_STATUS, payload });

export const postSignInForm = () => (dispatch: any, getState: () => Readonly<RootState>) => {
  dispatch(validateSignInForm({}));
  const state = getState();
  if(state.user.isValid.signin) {
    const data = state.user.forms.signin;
    const url = `/auth/login`;
    return POST(url, data, dispatch, getState, postSignInStatus)
    .then((response: any) => {
      dispatch(setToken(response.data));
      return response;
    })
  }


}


