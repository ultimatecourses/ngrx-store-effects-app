import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as fromHandlers from '../handlers';

export const getToppingsState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.toppings
);

export const getToppingEntities = createSelector(
  getToppingsState,
  (state: fromHandlers.ToppingsState) => state.entities
);

export const getSelectedToppings = createSelector(
  getToppingsState,
  (state: fromHandlers.ToppingsState) => state.selectedToppings
);

export const getAllToppings = createSelector(getToppingEntities, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getToppingsLoaded = createSelector(
  getToppingsState,
  (state: fromHandlers.ToppingsState) => state.loaded
);

export const getToppingsLoading = createSelector(
  getToppingsState,
  (state: fromHandlers.ToppingsState) => state.loading
);
