import * as actionTypes from "./actionTypes"

export const setSignUpFormField = (payload: SetFieldAction) =>
  ({ type: actionTypes.SET_SIGNUP_FORM_FIELD, payload });

export const validateSignUpForm = (payload: ValidateFormAction) =>
  ({ type: actionTypes.VALIDATE_SIGNUP_FORM, payload });
