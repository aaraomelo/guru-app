import { createAction, createReducer } from "@reduxjs/toolkit";
import { validateModel } from "../validations";
import * as actionTypes from "./actionTypes"
import { weatherInitialState } from "./state";
import { validate } from "./validate";

const setSignUpFormField = createAction<SetFieldAction>(actionTypes.SET_SIGNUP_FORM_FIELD);
const validateSignUpForm = createAction<ValidateFormAction>(actionTypes.VALIDATE_SIGNUP_FORM);

export default createReducer(weatherInitialState,
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
  }
);
