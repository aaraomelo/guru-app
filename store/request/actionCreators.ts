import axios from "axios";
import { RootState } from "..";
import * as actionTypes from "./actionTypes"

export const setToken = (payload: TokenInterface) =>
  ({ type: actionTypes.SET_TOKEN, payload });

const getHeaders = (rootState: RootState) =>
({
  headers: {
    Authorization: `Bearer ${rootState.request.access_token}`
  }
});

export const POST = (url: string, data: any, dispatch: any, getState: () => RootState, requestAction: any) =>
  new Promise<any>((resolve, reject) => {
    const state = getState();
    dispatch(requestAction({ status: 'pending', value: true }))
    axios.post(`${state.request.baseURL}${url}`, data, { ...getHeaders(state) })
      .then(
        (response) => {
          dispatch(requestAction({ status: 'suceeded', value: true }))
          dispatch(requestAction({ status: 'failed', value: false }))
          dispatch(requestAction({ status: 'pending', value: false }))
          resolve(response as any);
        },
        (error) => {
          dispatch(requestAction({ status: 'suceeded', value: false }))
          dispatch(requestAction({ status: 'failed', value: true }))
          dispatch(requestAction({ status: 'pending', value: false }))
          reject(error as any);
        });
  });
