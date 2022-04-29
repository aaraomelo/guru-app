import React, { cloneElement } from 'react'
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./user/reducer";
import requestReducer from "./request/reducer";

const reducer = {
  user: userReducer,
  request: requestReducer,
}

export const store = configureStore({ reducer })

export const StoreProvider = ({ children }: any) =>
  cloneElement(<Provider store={store} children={undefined} />, { children })

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
