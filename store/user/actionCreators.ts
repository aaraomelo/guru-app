import { RootState } from "..";
import { ERROR, GET, POST, setToken } from "../request/actionCreators";
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
  if (state.user.isValid.signin) {
    const data = state.user.forms.signin;
    const url = `/auth/login`;
    return POST(url, data, dispatch, getState, postSignInStatus)
      .then((response: any) => {
        dispatch(setToken(response.data));
        dispatch(setCurrentUser(response.data.user));
        dispatch(setAuth(true))
        return response;
      })
  } else {
    return ERROR({
      statusCode: 400,
      message: "Por gentileza, verifique a validade dos campos."
    })
  }
}

export const setAuth = (payload: boolean) =>
  ({ type: actionTypes.SET_AUTH, payload });

export const setCurrentUser = (payload: UserInterface) =>
  ({ type: actionTypes.SET_CURRENT_USER, payload });

export const getProfile = () => (dispatch: any, getState: () => Readonly<RootState>) => {
  const state = getState();
  if (state.request.access_token != null) {
    const url = `/auth/profile`;
    return GET(url, dispatch, getState, postSignInStatus)
      .then((response: any) => {
        dispatch(setAuth(true))
        dispatch(setCurrentUser(response.data))
        return response;
      })
      .catch((error) => {
        dispatch(setAuth(false))
        return error;
      })
  } else {
    dispatch(setAuth(false))
    return ERROR({
      statusCode: 401,
      message: "Credenciais inválidas"
    })
  }
}



