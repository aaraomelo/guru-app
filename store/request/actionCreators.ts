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
    dispatch(requestAction({ status: 'pending', value: true }))
    axios.post(url, data, { ...getHeaders(getState()) })
      .then(
        (response) => {
          []
          dispatch(requestAction({ status: 'suceeded', value: true }))
          dispatch(requestAction({ status: 'failed', value: false }))
          dispatch(requestAction({ status: 'pending', value: false }))
          resolve(response as any);
        },
        (err) => {
          dispatch(requestAction({ status: 'suceeded', value: false }))
          dispatch(requestAction({ status: 'failed', value: true }))
          dispatch(requestAction({ status: 'pending', value: false }))
          reject(err as any);
        });
  });
