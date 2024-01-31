import { PizzasEffects } from './pizza.effects';
import { ToppingsEffects } from './topping.effects';

export const effects: any[] = [PizzasEffects, ToppingsEffects];

export * from './pizza.effects';
export * from './topping.effects';