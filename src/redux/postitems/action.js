import { ADD_POST, REMOVE_POST } from "./types";

export const addPost = (payload) => {
  return {
    type: ADD_POST,
    payload,
  };
};

export const removePost = (title) => {
  return {
    type: REMOVE_POST,
    title,
  };
};
