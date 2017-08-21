import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as Counter from '../store/actions';
import 'rxjs/Rx';

interface AppState {
    counter: number;
}

@Component({
    selector: 'eld-principal',
    template: `
    <button (click)="increment()">Increment</button>
    <div>Current Count: {{ counter | async }}</div>
    <button (click)="decrement()">Decrement</button>
    <br/>
    <button (click)="reset()">Reset Counter</button>
    `
})

// tslint:disable-next-line:component-class-suffix
export class Principal  {
    counter: Observable<number>;
    constructor(private store: Store<AppState>) {
        this.counter = store.select('counter');
    }

    public increment() {
        this.store.dispatch(new Counter.IncrementAction());
    }

    public decrement() {
        this.store.dispatch(new Counter.DecrementAction());
    }

    public reset() {
        this.store.dispatch(new Counter.ResetAction(5));
    }
}
