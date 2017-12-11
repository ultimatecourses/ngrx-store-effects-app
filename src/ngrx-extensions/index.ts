import { Action } from '@ngrx/store';

/**
 * Defines a standard way to decorate an Action with a Payload
 */
export interface ActionWithPayload<T> extends Action {
  payload: T;
}

/**
 * A base interface for a Type / Action / Reducer Wrapper&Helper
 */
export interface StateActionBase<TState> {
  type: string;
  reduce?: (state: TState, payload?: any) => TState;
}

/**
 * Type / Action / Reducer Wrapper&Helper for actions with a payload
 */
export class StateActionPayload<TState, TPayload> implements StateActionBase<TState> {
  /**
   * Creates an Action Factory with a state reduce function specific to the payload type
   * @param type unique action type identifier
   * @param reduce the reducer for this type
   */
  constructor(
    public readonly type: string,
    public readonly reduce: (state: TState, payload: TPayload) => TState
  ) { }

  /**
   * Creates a new action for the inner type with the specified payload
   */
  readonly create = function (payload: TPayload): ActionWithPayload<TPayload> {
    return {
      type: this.type,
      payload
    };
  }
}

/**
 * Type / Action / Reducer Wrapper&Helper for actions without a payload
 */
export class StateAction<TState> implements StateActionBase<TState> {
  /**
   * Creates an Action Factory with an optional state reduce function
   * @param type unique action type identifier
   * @param reduce the optional reducer for this type
   */
  constructor(
    public readonly type: string,
    public readonly reduce?: (state: TState) => TState
  ) { }

  /**
   * Creates a new action for the inner type
   */
  readonly create = function (): Action {
    return {
      type: this.type
    };
  }
}

/**
 * A reducer function that takes a state and returns a new state
 */
export interface StateReducer<TState> {
  (state: TState, action: Action | ActionWithPayload<any>): TState
}

/**
 * Helper class that provides a way to:
 * - simplify action creations
 * - simplify reducer creation based on sub-reducer passed along with action types
 */
export class StateHandler<TState> {
  private readonly actionMap: { [actionType: string]: StateActionBase<TState> } = {};
  private _reducer: StateReducer<TState>;

  /**
   * Creates a new StateHandler for the specified state with an initialState
   * @param initialState an initialState used as default for the reducer function
   */
  constructor(public readonly initialState: TState) { }

  /**
   * Gets the reducer function for the state (to be used in NgRx)
   */
  get reducer(): StateReducer<TState> {
    return this._reducer || (this._reducer = this.prepareReducer());
  }

  /**
   * Creates an Action Factory with an optional state reduce function
   * @param type unique action type identifier
   * @param reduce the optional reducer for this type
   */
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

  /**
   * Creates an Action Factory with a state reduce function specific to the payload type
   * @param type unique action type identifier
   * @param reduce the reducer for this type
   */
  actionWithPayload<TPayload>(
    type: string,
    reduce: (state: TState, payload: TPayload) => TState
  ): StateActionPayload<TState, TPayload> {
    const action = new StateActionPayload(type, reduce);
    this.actionMap[type] = action;
    return action;
  }

  /**
   * Creates the reducer function
   */
  private prepareReducer(): StateReducer<TState> {
    const actionMap = this.actionMap;
    const initialState = this.initialState;
    return function reducer(state: TState = initialState, action: ActionWithPayload<any>): TState {
      const actionReducer = actionMap[action.type];
      return actionReducer && actionReducer.reduce ? actionReducer.reduce(state, action.payload) : state;
    }
  }
}
