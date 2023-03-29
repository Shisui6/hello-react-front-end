import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectGreetings, fetchGreetings } from '../redux/greeting/greeting.js';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector(selectGreetings);

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return ( 
    <h1>{greeting.greeting}</h1>
  );
}
 
export default Greeting;