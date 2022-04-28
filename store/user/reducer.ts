import { createAction, createReducer } from "@reduxjs/toolkit";
import { validateModel } from "../validations";
import * as actionTypes from "./actionTypes"
import { weatherInitialState } from "./state";
import { validate } from "./validate";

const setSignUpFormField = createAction<SetFieldAction>(actionTypes.SET_SIGNUP_FORM_FIELD);

export default createReducer(weatherInitialState,
  (builder) => {
    builder
      .addCase(setSignUpFormField, (state, action) => {
        const { payload: { field, value } } = action
        state.forms.signup[field] = value;
        state.validations.signup = validateModel(state.forms.signup, state.validations.signup, validate, action.payload.field)
      })
  }
);
