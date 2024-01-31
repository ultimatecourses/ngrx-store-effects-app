import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

import { Effect, Actions } from "@ngrx/effects";
import * as RouterActions from '../actions/router.actions';

import { tap, map } from 'rxjs/operators';
import { RouterAction } from '@ngrx/router-store/src/router_store_module';

@Injectable()
export class RouterEffects {
    constructor(
        private actions$: Actions,
        private router: Router,
        private location: Location
    ) { }

    @Effect({ dispatch: false })
    navigate$ = this.actions$
        .ofType(RouterActions.GO)
        .pipe(map((action: RouterActions.Go) => action.payload),
        tap(({ path, query: queryParams, extras }) => {
            this.router.navigate(path, { queryParams, ...extras });
        }));
    @Effect({ dispatch: false })
    navigateBack$ = this.actions$
        .ofType(RouterActions.BACK)
        .pipe(tap(() => this.location.back()));
    @Effect({ dispatch: false })
    navigateForward$ = this.actions$
        .ofType(RouterActions.FORWARD)
        .pipe(tap(() => this.location.forward()));
}