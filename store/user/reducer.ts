import { createAction, createReducer } from "@reduxjs/toolkit";
import * as actionTypes from "./actionTypes"
import { weatherInitialState } from "./state";

const setSignUpFormField = createAction<SetFieldAction>(actionTypes.SET_SIGNUP_FORM_FIELD);

export default createReducer(weatherInitialState,
  (builder) => {
    builder
      .addCase(setSignUpFormField, (state, action) => {
        const { payload: { field, value } } = action
        state.forms.signup[field] = value;
      })

  }
);
