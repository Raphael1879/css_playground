import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import * as fromCounterState from './reducers';

export const counterRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CounterComponent
  }
]

@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(counterRoutes),
    StoreModule.forFeature(fromCounterState.counterStateFeatureKey, fromCounterState.counterReducer),
  ]
})
export class CounterModule { }
