// make a call for data and call action success/fail

import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as pizzaActions from '../actions/pizzas.action';
import * as fromServices from '../../services';

@Injectable()
export class PizzasEffects {
  constructor(
    private actions$: Actions,
    private pizzaService: fromServices.PizzasService
  ) {}

  @Effect() // decorator ... we can also ({dispatch: false}) and nothing will be dispatch (no actions!)
  // loadPizzas$ is an Observable with generic type of ACTION  -> we need to return an action!
  loadPizzas$ = this.actions$.ofType(pizzaActions.LOAD_PIZZAS).pipe(
    switchMap(() => { // switch to new observable stream
      return this.pizzaService
        .getPizzas()
        .pipe( // ... and then map over it
          map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)), // if we map - we succeed so dispatch action.success
          catchError(error => of(new pizzaActions.LoadPizzasFail(error))) // 'of' -> return observable of our action
        );
    })
  );
}
