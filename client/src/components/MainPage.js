import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import getUserThunk from '../redux/actions/userActions';

function mainPage() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user);
  console.log(user);

  useEffect(() => {
    dispatch(getUserThunk());
  }, [])

  return (
    <div>{user.map((el) => (
      <div key={Math.random() * 10}>
        {el.name}
      </div>
    ))}</div>
  )
}

export default mainPage
