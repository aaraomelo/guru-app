import axios from "axios";

export const POST = (url: string, data: any, dispatch: any, requestAction: any) =>
  new Promise<any>((resolve, reject) => {
    dispatch(requestAction({ status: 'pending', value: true }))
    axios.post(url, data)
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
