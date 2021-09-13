import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount, incrementAsync, selectCount } from './counterSlice';

function Counter(): JSX.Element {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const handleIncrement = (): { payload: undefined; type: string } => dispatch(increment());

  const handleDicrement = (): { payload: undefined; type: string } => dispatch(decrement());

  const handleIncrementAmount = (): { payload: number; type: string } =>
    dispatch(incrementByAmount(Number(incrementAmount) || 0));

  const handleIncrementAsynk = (): unknown => dispatch(incrementAsync(Number(incrementAmount) || 0));

  return (
    <div>
      <div>
        <button type="button" aria-label="Increment value" onClick={handleIncrement}>
          +
        </button>
        <span>{count}</span>
        <button type="button" aria-label="Decrement value" onClick={handleDicrement}>
          -
        </button>
      </div>
      <div>
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e): void => setIncrementAmount(e.target.value)}
        />
        <button type="button" onClick={handleIncrementAmount}>
          Add Amount
        </button>
        <button type="button" onClick={handleIncrementAsynk}>
          Add Async
        </button>
      </div>
    </div>
  );
}

export default Counter;
