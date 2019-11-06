import React from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';

// redux actions
import {increment, decrement} from './actions';

function App() {
	const counterReducer = useSelector(state => state.counterReducer);
	const isLogged = useSelector(state => state.isLogged);
	const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counterReducer}</h1>
			<button onClick={() => dispatch(increment(5))}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>

			{isLogged ?
			<h3>Valuable info that only a logged in user should see</h3> :
			<p>User Is Not Logged In</p>}
    </div>
  );
}

export default App;
