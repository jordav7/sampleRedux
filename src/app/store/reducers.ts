import { ActionReducerMap } from '@ngrx/store';
import * as Actions from './actions';

export type Action = Actions.Actions;

export const reducer = (state: number = 0, action: Action) => {
    switch (action.type) {
        case Actions.INCREMENT: {
            return state +  1;
        }
        case Actions.DECREMENT: {
            return state -  1;
        }
        case Actions.RESET: {
            return action.payload;
        }
        default:
            return state;
    }
}
