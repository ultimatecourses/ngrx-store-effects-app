import * as fromToppings from './toppings.action';

describe('Toppings Actions', () => {

  describe('LoadToppings Actions', () => {
    describe('LoadToppings', () => {
      it('should create an action', () => {
        const action = new fromToppings.LoadToppings();

        expect({...action}).toEqual({
          type: fromToppings.LOAD_TOPPINGS
        });
      });
    });

    describe('LoadToppingsFail', () => {
      it('should create an action', () => {
        const payload = {message: 'Load Error'};
        const action = new fromToppings.LoadToppingsFail(payload);

        expect({...action}).toEqual({
          type: fromToppings.LOAD_TOPPINGS_FAIL,
          payload
        });
      });
    });

    describe('LoadToppingsSuccess', () => {
      it('should create an action', () => {
        const payload = [
          {id: 1, name: 'test'},
          {id: 2, name: 'test2'},
          {id: 3, name: 'test3'},
        ];
        const action = new fromToppings.LoadToppingsSuccess(payload);

        expect({...action}).toEqual({
          type: fromToppings.LOAD_TOPPINGS_SUCCESS,
          payload
        });
      });
    });
  });
});
