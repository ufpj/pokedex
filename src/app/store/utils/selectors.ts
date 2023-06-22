import { createSelector } from '@ngrx/store';

export function createGenericSelector(selectorFn: (state: any) => any) {
  return createSelector(selectorFn, (state) => state);
}
