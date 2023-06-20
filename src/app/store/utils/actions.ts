import { createAction, props } from '@ngrx/store';

export function createActionTypes(baseType: string) {
    return {
        success: `[${baseType}] Success`,
        failure: `[${baseType}] Failure`,
    };
}

export function createAsyncAction<T>(baseType: string) {
    const types = createActionTypes(baseType);

    const start = createAction(`[${baseType}] Start`);
    const success = createAction(types.success, props<{ data: T }>());
    const failure = createAction(types.failure, props<{ error: Error }>());

    return { start, success, failure };
}
