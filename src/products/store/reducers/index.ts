import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromPizzas from "./pizzas.reducer";

export interface ProductsState {
  pizzas: fromPizzas.PizzaState
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer,
};

export const getProductsState = createFeatureSelector<ProductsState>('products');
// founded in products.module.ts ...forFeature('products')

// pizza State achieving by: get me the products and from it get me the pizzas
export const getPizzaState = createSelector(getProductsState, (state: ProductsState) => state.pizzas);

export const getAllPizzas = createSelector(getPizzaState, fromPizzas.getPizzas);
export const getAllPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzasLoaded);
export const getAllPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzasLoading);
