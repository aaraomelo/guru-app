import { createAction, createReducer } from "@reduxjs/toolkit";
import { validateModel } from "../validations";
import * as actionTypes from "./actionTypes"
import { userInitialState } from "./state";
import { validate } from "./validate";

const setSignUpFormField = createAction<SetFieldAction>(actionTypes.SET_SIGNUP_FORM_FIELD);
const validateSignUpForm = createAction<ValidateFormAction>(actionTypes.VALIDATE_SIGNUP_FORM);
const setSignInFormField = createAction<SetFieldAction>(actionTypes.SET_SIGNIN_FORM_FIELD);
const validateSignInForm = createAction<ValidateFormAction>(actionTypes.VALIDATE_SIGNIN_FORM);

export default createReducer(userInitialState,
  (builder) => {
    builder
      .addCase(setSignUpFormField, (state, action) => {
        const { payload: { field, value } } = action
        state.forms.signup[field] = value;
        state.validations.signup = validateModel(state.forms.signup, state.validations.signup, validate, field)
      })
      .addCase(validateSignUpForm, (state, action) => {
        const { payload: { field } } = action
        state.validations.signup = validateModel(state.forms.signup, state.validations.signup, validate, field)
      })
      .addCase(setSignInFormField, (state, action) => {
        const { payload: { field, value } } = action
        state.forms.signin[field] = value;
        state.validations.signin = validateModel(state.forms.signin, state.validations.signin, validate, field)
      })
      .addCase(validateSignInForm, (state, action) => {
        const { payload: { field } } = action
        state.validations.signin = validateModel(state.forms.signin, state.validations.signin, validate, field)
      })
  }
);
