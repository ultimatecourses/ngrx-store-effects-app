import * as fromPizzas from './pizzas.action';

describe('Pizzas Actions', () => {

  describe('LoadPizzas Actions', () => {
    describe('LoadPizzas', () => {
      it('should create an action', () => {
        const action = new fromPizzas.LoadPizzas();

        expect({...action}).toEqual({
          type: fromPizzas.LOAD_PIZZAS
        });
      });
    });

    describe('LoadPizzasFail', () => {
      it('should create an action', () => {
        const payload = {message: 'Load Error'};
        const action = new fromPizzas.LoadPizzasFail(payload);

        expect({...action}).toEqual({
          type: fromPizzas.LOAD_PIZZAS_FAIL,
          payload
        });
      });
    });

    describe('LoadPizzasSuccess', () => {
      it('should create an action', () => {
        const payload = [
          {
            'name': 'Seaside Surfin',
            'toppings': [
              {
                'id': 6,
                'name': 'mushroom'
              }]
          },
          {
            'name': 'Seaside Surfin2',
            'toppings': [
              {
                'id': 5,
                'name': 'mushrooms'
              }]
          }
        ];
        const action = new fromPizzas.LoadPizzasSuccess(payload);

        expect({...action}).toEqual({
          type: fromPizzas.LOAD_PIZZAS_SUCCESS,
          payload
        });
      });
    });
  });
});
