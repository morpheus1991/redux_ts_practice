import { createReducer } from "typesafe-actions";
import { CounterTypes, decrease, increase } from "../actions/counter";

interface InitialState {
  number: number;
}
const initialState: InitialState = {
  number: 0,
};
const counterState = createReducer<InitialState, CounterTypes>(initialState)
  .handleAction([increase], (state, action) => ({
    ...state,
    number: state.number + 1,
  }))
  .handleAction([decrease], (state, action) => ({
    ...state,
    number: state.number - 1,
  }));

export default counterState;

export type CounterState = ReturnType<typeof counterState>;
