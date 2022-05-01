import { RootState } from "..";
import { POST } from "../request/actionCreators";
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
  const state = getState();
  const data = state.user.forms.signin;
  const url = `auth/login`;
  return POST(url, data, dispatch, getState, postSignInStatus)
  .then((response: any) => {
    console.log(response);
  })
}


