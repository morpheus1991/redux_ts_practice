import { createReducer } from "typesafe-actions";
import {
  add,
  changeCheck,
  deleteTodo,
  TodoActionTypes,
} from "../actions/todoList";

export type Todo = {
  text: string;
  done: boolean;
  check: boolean;
  id: number;
};
export type Todos = Todo[];
export interface InitialState {
  todos: Todos;
}
const initialState = {
  todos: [],
};

const todoState = createReducer<InitialState, TodoActionTypes>(initialState)
  .handleAction([add], (state, action) => ({
    ...state,
    todos: [...state.todos, { id: 4, text: "", done: false, check: false }],
  }))
  .handleAction([deleteTodo], (state, action) => ({
    ...state,
    todos: [...state.todos.filter((item) => item.id !== action.payload.id)],
  }))
  .handleAction([changeCheck], (state, action) => ({
    ...state,
    todos: [
      ...state.todos.map((item) =>
        item.id === action.payload.id ? { ...item, check: !item.check } : item
      ),
    ],
  }));

export default todoState;

export type TodoState = ReturnType<typeof todoState>;
