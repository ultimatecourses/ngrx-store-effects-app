import { Action } from '@ngrx/store';
import { Type } from '@angular/core';

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export interface StateActionBase<TState> {
  type: string;
  reduce?: (state: TState, payload?: any) => TState;
}

export class StateActionPayload<TState, TPayload> implements StateActionBase<TState> {
  constructor(
    public readonly type: string,
    public readonly reduce: (state: TState, payload: TPayload) => TState
  ) {
    // TODO Dynamic Register in singleton
  }
  readonly action = function(payload: TPayload): Action | ActionWithPayload<TPayload> {
    return {
      type: this.type,
      payload
    };
  }
}

export class StateAction<TState> extends StateActionPayload<TState, void> {
  constructor(
    public readonly type: string,
    public readonly reduce: (state: TState) => TState
  ) {
    super(type, reduce);
  }

  readonly action = function(): Action {
    return {
      type: this.type
    };
  }
}

export interface StateReducer<TState> {
  (state: TState, action: Action | ActionWithPayload<any>): TState
}

export class StateHandler<TState> {
  private readonly actionMap: { [actionType: string] : StateActionBase<TState> } = {};
  private _reducer: StateReducer<TState>;

  constructor(
    public readonly stateId: string,
    public readonly initialState: TState
  ) {

  }

  get reducer(): StateReducer<TState> {
    return this._reducer || (this._reducer = this.prepareReducer());
  }

  action(
    type: string,
    reduce?: (state: TState) => TState
  ): StateAction<TState> {
    const action = new StateAction(type, reduce);
    // register action only if reducer has been specified
    if (reduce) {
      this.actionMap[type] = action;
    }
    return action;
  }

  actionWithPayload<TPayload>(
    type: string,
    reduce: (state: TState, payload: TPayload) => TState
  ): StateActionPayload<TState, TPayload> {
    const action = new StateActionPayload(type, reduce);
    this.actionMap[type] = action;
    return action;
  }

  private prepareReducer(): StateReducer<TState> {
    const actionMap = this.actionMap;
    const initialState = this.initialState;
    return function reducer(state: TState = initialState, action: ActionWithPayload<any>): TState {
      const actionReducer = actionMap[action.type];
      return actionReducer && actionReducer.reduce ? actionReducer.reduce(state, action.payload) : state;
    }
  }
}

// TEST USAGE

// export interface FooState {
//   index: number;
// }

// export const FooHandler = new StateHandler<FooState>('foo', { index: 0 });

// export const increment = FooHandler.action(
//   '[Foo] Increment',
//   function(s: FooState) {
//     return {
//       ...s,
//       index: s.index + 1
//     };
//   }
// );

// export const incrementBy = FooHandler.actionWithPayload<number>(
//   '[Foo] Increment',
//   function(s, by) {
//     return {
//       ...s,
//       index: s.index + by
//     };
//   }
// );
