import { PizzasGuard } from './pizzas.guard';
import { PizzaExistsGuard } from './pizza-exists.guard';

export const guards: any[] = [PizzaExistsGuard, PizzasGuard];

export * from './pizza-exists.guard';
export * from './pizzas.guard';
