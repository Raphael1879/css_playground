import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { CounterActions } from '../action-types';

export const counterStateFeatureKey = 'counter';

export interface CounterState {
  counter: number,
  increment: number
}

export const initialCounterState: CounterState = {
  counter: 0,
  increment: 1
}

export const counterReducer = createReducer(
  initialCounterState,
  on(CounterActions.add, (state, action) => {
    return {
      counter: state.counter + state.increment,
      increment: state.increment
    }
  }),
  on(CounterActions.subtract, (state, action) => {
    return {
      counter: state.counter - state.increment,
      increment: state.increment
    }
  })
);

