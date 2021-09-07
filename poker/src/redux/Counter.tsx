import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount, incrementAsync, selectCount } from './counterSlice';

function Counter(): JSX.Element {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div>
        <button type="button" aria-label="Increment value" onClick={() => dispatch(increment())}>
          +
        </button>
        <span>{count}</span>
        <button type="button" aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
      <div>
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button type="button" onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
          Add Amount
        </button>
        <button type="button" onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}>
          Add Async
        </button>
      </div>
    </div>
  );
}

export default Counter;
