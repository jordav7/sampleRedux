import { Action } from '@ngrx/store';

export const INCREMENT = '[Counter] Increment';
export const DECREMENT = '[Counter] Decrement';
export const RESET = '[Counter] Reset';

export class IncrementAction implements Action {
    readonly type = INCREMENT;
}

export class DecrementAction implements Action {
    readonly type = DECREMENT;
}

export class ResetAction implements Action {
    readonly type = RESET;

    constructor(public payload: number) { }
}

export type Actions = IncrementAction | DecrementAction | ResetAction;
