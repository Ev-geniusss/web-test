import { GET_ALL_USERS } from '../types/userTypes';

export const getUser = (data) => ({ type: GET_ALL_USERS, payload: data });

export const getUserThunk = (id) => async (dispatch) => {
  const response = await fetch(`/`);
  const data = await response.json();
  console.log('=>>>>>response', data);
  if (response.ok) {
    dispatch(getUser(data));
  }
};
