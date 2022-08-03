
import { GET_ALL_USERS } from '../constants';

const usersReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_USERS:
      return payload;
    default:
      return state;
  }
};

export default usersReducer;
