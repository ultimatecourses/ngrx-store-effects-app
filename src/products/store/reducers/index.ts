import {
  ActionReducerMap,
  createFeatureSelector
} from '@ngrx/store';
import * as fromPizzas from './pizza.reducers';
import * as fromToppings from './topping.reducers';

export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
  toppings: fromPizzas.PizzaState;
};

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer,
  toppings: fromToppings.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>(
  'products'
);