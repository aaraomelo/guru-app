export const RequestInitialState: RequestState = {
  baseURL: "http://localhost:3001",
  access_token: typeof window !== "undefined" ? localStorage.getItem('gtoken') : null
};
