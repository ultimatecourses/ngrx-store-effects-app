import { PizzasGuard } from './pizzas.guard';
import { PizzaExistsGuard } from './pizza-exists.guard';
import { ToppingsGuard } from './toppings.guard';

export const guards: any[] = [PizzaExistsGuard, PizzasGuard, ToppingsGuard];

export * from './pizza-exists.guard';
export * from './pizzas.guard';
export * from './toppings.guard';
