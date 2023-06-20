import { createEffect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export function createGenericEffect(
    actions$: Actions,
    action: Observable<any>,
    effectFn: (action$: Observable<any>) => Observable<any>,
) {
    return createEffect(() =>
        action.pipe(
            switchMap((action) => effectFn(action)),
        ),
    );
}
