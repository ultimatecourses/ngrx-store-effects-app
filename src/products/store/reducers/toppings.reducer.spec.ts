import * as fromHandlers from '../handlers';
import { Topping } from '../../models/topping.model';

describe('ToppingsReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromHandlers.ToppingsHandler;
      const action = {} as any;
      const state = fromHandlers.ToppingsHandler.reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('LOAD_TOPPINGS action', () => {
    it('should set loading to true', () => {
      const { initialState } = fromHandlers.ToppingsHandler;
      const action = fromHandlers.LoadToppings.action();
      const state = fromHandlers.ToppingsHandler.reducer(initialState, action);

      expect(state.loading).toEqual(true);
      expect(state.loaded).toEqual(false);
      expect(state.entities).toEqual({});
    });
  });

  describe('LOAD_TOPPINGS_SUCCESS action', () => {
    it('should populate the toppings array', () => {
      const toppings: Topping[] = [
        { id: 1, name: 'bacon' },
        { id: 2, name: 'pepperoni' },
        { id: 3, name: 'tomato' },
      ];
      const entities = {
        1: toppings[0],
        2: toppings[1],
        3: toppings[2],
      };
      const { initialState } = fromHandlers.ToppingsHandler;
      const action = fromHandlers.LoadToppingsSuccess.action(toppings);
      const state = fromHandlers.ToppingsHandler.reducer(initialState, action);

      expect(state.loaded).toEqual(true);
      expect(state.loading).toEqual(false);
      expect(state.entities).toEqual(entities);
    });
  });

  describe('LOAD_TOPPINGS_FAIL action', () => {
    it('should return the initial state', () => {
      const { initialState } = fromHandlers.ToppingsHandler;
      const action = fromHandlers.LoadToppingsFail.action({});
      const state = fromHandlers.ToppingsHandler.reducer(initialState, action);

      expect(state).toEqual(initialState);
    });
    it('should return the previous state', () => {
      const { initialState } = fromHandlers.ToppingsHandler;
      const previousState = { ...initialState, loading: true };
      const action = fromHandlers.LoadToppingsFail.action({});
      const state = fromHandlers.ToppingsHandler.reducer(previousState, action);
      expect(state).toEqual(initialState);
    });
  });

  describe('VISUALISE_TOPPINGS action', () => {
    it('should set an array of number ids', () => {
      const { initialState } = fromHandlers.ToppingsHandler;
      const action = fromHandlers.VisualiseToppings.action([1, 5, 9]);
      const state = fromHandlers.ToppingsHandler.reducer(initialState, action);

      expect(state.selectedToppings).toEqual([1, 5, 9]);
    });
  });
});
