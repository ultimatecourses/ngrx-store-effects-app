import * as fromHandlers from '../handlers';

describe('Toppings Actions', () => {
  describe('LoadToppings Actions', () => {
    describe('LoadToppings', () => {
      it('should create an action', () => {
        const action = fromHandlers.LoadToppings.create();
        expect({ ...action }).toEqual({
          type: fromHandlers.LoadToppings.type,
        });
      });
    });

    describe('LoadToppingsFail', () => {
      it('should create an action', () => {
        const payload = { message: 'Load Error' };
        const action = fromHandlers.LoadToppingsFail.create(payload);

        expect({ ...action }).toEqual({
          type: fromHandlers.LoadToppingsFail.type,
          payload,
        });
      });
    });

    describe('LoadToppingsSuccess', () => {
      it('should create an action', () => {
        const payload = [
          { id: 1, name: 'onion' },
          { id: 2, name: 'mushroom' },
          { id: 3, name: 'basil' },
        ];
        const action = fromHandlers.LoadToppingsSuccess.create(payload);

        expect({ ...action }).toEqual({
          type: fromHandlers.LoadToppingsSuccess.type,
          payload,
        });
      });
    });
  });

  describe('VisualiseToppings Actions', () => {
    describe('VisualiseToppings', () => {
      it('should create an action', () => {
        const action = fromHandlers.VisualiseToppings.create([1, 2, 3]);
        expect({ ...action }).toEqual({
          type: fromHandlers.VisualiseToppings.type,
          payload: [1, 2, 3],
        });
      });
    });
  });
});
