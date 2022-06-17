// import {LOG_IN} from "./actionType";
export const LOG_IN = "LOG_IN";

export const logIn = (data) => ({
  type: LOG_IN,
  payload: data,
});
