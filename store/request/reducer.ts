import * as actionTypes from "./actionTypes"
import { createAction, createReducer } from "@reduxjs/toolkit";
import { RequestInitialState } from "./state";

const setToken = createAction<TokenInterface>(actionTypes.SET_TOKEN);

export default createReducer(RequestInitialState,
  (builder) => {
    builder
      .addCase(setToken, (state, action) => { 
        const { access_token } = action.payload;
        state.access_token = access_token;
        localStorage.setItem('gtoken', access_token || '');
      })
  }
);
