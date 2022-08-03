import { GET_ALL_USERS } from '../constants';

export const getUser = (data) => ({ type: GET_ALL_USERS, payload: data });


export const getUserThunk = () => async (dispatch) => {
  const response = await fetch(`/`);
  const data = await response.json();
  console.log('=>>>>>response', data);
  if (response.ok) {
    dispatch(getUser(data));
  }
};


export default getUserThunk;

