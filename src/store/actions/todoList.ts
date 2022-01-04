import { Action, ActionType, createAction } from "typesafe-actions";
import { InitialState } from "../reducers/todoList";
type GetPayload<A extends (...args: any[]) => any> =
  ReturnType<A> extends Action<infer P> ? P : never;

export const ADD = "ADD_TODO";
export const DELETE = "DELETE_TODO";
export const CHANGE_DONE = "CHANGE_DONE";
export const CHANGE_CHECK = "CHANGE_CHECK";

export const add = createAction(ADD, (text: string) => ({ text }))();
export const deleteTodo = createAction(DELETE, (id: number) => ({ id }))();
export const changeDone = createAction(CHANGE_DONE, (id: number) => ({ id }))();
export const changeCheck = createAction(CHANGE_CHECK, (id: number) => ({
  id,
}))();

export type TodoActionTypes =
  | ActionType<typeof add>
  | ActionType<typeof deleteTodo>
  | ActionType<typeof changeDone>
  | ActionType<typeof changeCheck>;
