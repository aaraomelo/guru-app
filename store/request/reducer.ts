import { createAction, createReducer } from "@reduxjs/toolkit";
import { RequestInitialState } from "./state";

export default createReducer(RequestInitialState,
  (builder) => {
    builder
      .addDefaultCase((state, action) => { })
  }
);
