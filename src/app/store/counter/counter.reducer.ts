import {ActionTypes, CounterActions} from './counter.action';

export interface CounterState {
  clicks: number;
  quantity: number;
}

export const counterInitialState: CounterState = {
  clicks: 0,
  quantity: 0,
};

export function counterReducer(state = counterInitialState, action: CounterActions): CounterState {
  switch (action.type) {
    case ActionTypes.Increment:
      return {
        quantity: state.quantity + 1,
        clicks: state.clicks + 1
      };

    case ActionTypes.Decrement:
      return {
        quantity: state.quantity - 1,
        clicks: state.clicks + 1
      };

    case ActionTypes.Reset:
      return {...counterInitialState};

    default:
      return state;
  }
}
