import { Topping } from '../../models/topping.model';
import { StateHandler } from '../../../ngrx-extensions';

export interface ToppingsState {
  entities: { [id: number]: Topping };
  loaded: boolean;
  loading: boolean;
  selectedToppings: number[];
}

export const ToppingsHandler = new StateHandler<ToppingsState>(
  {
    entities: {},
    loaded: false,
    loading: false,
    selectedToppings: [],
  }
);

export const LoadToppings = ToppingsHandler.action(
  '[Products] Load Toppings',
  function (state) {
    return {
      ...state,
      loading: true,
    };
  }
);

export const LoadToppingsFail = ToppingsHandler.actionWithPayload<any>(
  '[Products] Load Toppings Fail',
  function (state, payload) {
    return {
      ...state,
      loaded: false,
      loading: false,
    };
  }
);

export const LoadToppingsSuccess = ToppingsHandler.actionWithPayload<Topping[]>(
  '[Products] Load Toppings Success',
  function (state, toppings) {
    const entities = toppings.reduce(
      (entities: { [id: number]: Topping }, topping: Topping) => {
        return {
          ...entities,
          [topping.id]: topping,
        };
      },
      {
        ...state.entities,
      }
    );

    return {
      ...state,
      loaded: true,
      loading: false,
      entities,
    };
  }
);

export const VisualiseToppings = ToppingsHandler.actionWithPayload<number[]>(
  '[Products] Visualise Toppings',
  function (state, selectedToppings) {
    return {
      ...state,
      selectedToppings,
    };
  }
);
