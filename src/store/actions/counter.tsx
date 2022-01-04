import { ActionType, createAction } from "typesafe-actions";

export const INCREASE = "INCREASE" as const;
export const DECREASE = "DECREASE" as const;

export const increase = createAction(INCREASE)();
export const decrease = createAction(DECREASE)();

export type CounterTypes =
  | ActionType<typeof increase>
  | ActionType<typeof decrease>;
