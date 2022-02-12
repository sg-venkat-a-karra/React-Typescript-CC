import { useReducer } from 'react';

/**
 *
 */

type CounterState = {
  count: number;
};

type CounterAction = {
  type: 'DECREMENT' | 'INCREMENT';
  payload: number;
};

type ResetAction = {
  type: 'RESET';
};

type UpdatedAction = CounterAction | ResetAction;

const initialState = {
  count: 0,
};

const counterReducer = (state: CounterState, action: UpdatedAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + action.payload };
    case 'DECREMENT':
      return { count: state.count - action.payload };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatchState] = useReducer(counterReducer, initialState);
  const handleIncrement = () => {
    dispatchState({ type: 'INCREMENT', payload: 10 });
  };
  const handleDecrement = () => {
    dispatchState({ type: 'DECREMENT', payload: 10 });
  };
  const handleReset = () => {
    dispatchState({ type: 'RESET' });
  };

  return (
    <div>
      <div>Count: {state.count}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

// #endregion

export default Counter;
