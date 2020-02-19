import { Dispatch, Store } from 'redux';

export type IAction<P, S, R> = (
  obj: P
) => (dispath: Dispatch, getState?: Store<S>['getState']) => R;
