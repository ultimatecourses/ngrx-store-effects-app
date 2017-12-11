import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromPizzas from './pizzas.reducer';
import { ToppingsState, ToppingsHandler } from '../handlers';

export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
  toppings: ToppingsState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer,
  toppings: ToppingsHandler.reducer,
};

export const getProductsState = createFeatureSelector<ProductsState>(
  'products'
);
