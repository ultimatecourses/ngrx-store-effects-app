import { Action } from '@ngrx/store';
import { Pizza } from '../../models/pizza.model';

// load pizzas
export const LOAD_PIZZAS = '[Products] Load Pizzas';
export const LOAD_PIZZAS_FAIL = '[Products] Load Pizzas Fail';
export const LOAD_PIZZAS_SUCCESS = '[Products] Load Pizzas Success';

export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
}
export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(public payload: any) { }
}
export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public payload: Pizza[]) { }
}

// create pizzas
export const CREATE_PIZZA = '[Products] Create Pizzas';
export const CREATE_PIZZA_FAIL = '[Products] Create Pizzas Fail';
export const CREATE_PIZZA_SUCCESS = '[Products] Create Pizzas Success';

export class CreatePizza implements Action {
  readonly type = CREATE_PIZZA;
  constructor(public payload: Pizza) { }
}
export class CreatePizzaFail implements Action {
  readonly type = CREATE_PIZZA_FAIL;
  constructor(public payload: any) { }
}
export class CreatePizzaSuccess implements Action {
  readonly type = CREATE_PIZZA_SUCCESS;
  constructor(public payload: Pizza) { }
}

// update pizzas
export const UPDATE_PIZZA = '[Products] Update Pizzas';
export const UPDATE_PIZZA_FAIL = '[Products] Update Pizzas Fail';
export const UPDATE_PIZZA_SUCCESS = '[Products] Update Pizzas Success';

export class UpdatePizza implements Action {
  readonly type = UPDATE_PIZZA;
  constructor(public payload: Pizza) { }
}
export class UpdatePizzaFail implements Action {
  readonly type = UPDATE_PIZZA_FAIL;
  constructor(public payload: any) { }
}
export class UpdatePizzaSuccess implements Action {
  readonly type = UPDATE_PIZZA_SUCCESS;
  constructor(public payload: Pizza) { }
}

// create pizzas
export const DELETE_PIZZA = '[Products] Delete Pizzas';
export const DELETE_PIZZA_FAIL = '[Products] Delete Pizzas Fail';
export const DELETE_PIZZA_SUCCESS = '[Products] Delete Pizzas Success';

export class DeletePizza implements Action {
  readonly type = DELETE_PIZZA;
  constructor(public payload: Pizza) { }
}
export class DeletePizzaFail implements Action {
  readonly type = DELETE_PIZZA_FAIL;
  constructor(public payload: any) { }
}
export class DeletePizzaSuccess implements Action {
  readonly type = DELETE_PIZZA_SUCCESS;
  constructor(public payload: Pizza) { }
}

export type PizzasAction
  = LoadPizzas
  | LoadPizzasFail
  | LoadPizzasSuccess
  | CreatePizza
  | CreatePizzaFail
  | CreatePizzaSuccess
  | UpdatePizza
  | UpdatePizzaFail
  | UpdatePizzaSuccess
  | DeletePizza
  | DeletePizzaFail
  | DeletePizzaSuccess;
