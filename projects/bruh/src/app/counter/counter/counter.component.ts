import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterActions } from '../action-types';
import { CounterState } from '../reducers';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  constructor(
    private store: Store<CounterState>
  ) { }

  ngOnInit(): void {
  }


  add(): void {
    this.store.dispatch(CounterActions.add());
  }

  subtract(): void {
    this.store.dispatch(CounterActions.subtract());
  }
}
