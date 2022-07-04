import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { User } from "@styling-app/api-interfaces";
import { StylingService } from "@styling-app/core-data";
import * as UserActions from './styling-actions';
import { map } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";

@Injectable()
export class UserEffects{
    loadUser$ = createEffect(() =>
        { return this.actions$.pipe(
            ofType(UserActions.loadUser),
            fetch({
                run: (action) =>
                    this.userService
                        .find(action.userId)
                        .pipe(map((user: User) => UserActions.loadUserSuccess({ user }))),
                    onError: (action, error) => UserActions.loadUserFailed({ error })    
            })
        ) });
    loadUsers$ = createEffect(() =>
        { return this.actions$.pipe(
            ofType(UserActions.loadUsers),
            fetch({
                run: () =>
                    this.userService
                    .getAll()
                    .pipe(
                        map((users: User[]) => UserActions.loadUsersSuccess({ users }))
                    ),
                onError: (action, error) => UserActions.loadUsersFailed({ error })    
            })
        ) });
        createUser$ = createEffect(() =>
        { return this.actions$.pipe(
            ofType(UserActions.createUser),
            pessimisticUpdate({
                run: (action) =>
                    this.userService
                        .create(action.user)
                        .pipe(map((user: User) => UserActions.createUserSuccess({ user }))),
                    onError: (action, error) => UserActions.createUserFailed({ error })    
            })
    ) });

    updateUser$ = createEffect(() =>
        { return this.actions$.pipe(
            ofType(UserActions.updateUser),
            pessimisticUpdate({
                run: (action) =>
                    this.userService
                        .update(action.user)
                        .pipe(map((user: User) => UserActions.updateUserSuccess({ user}))),
                    onError: (action, error) => UserActions.updateUserFailed({ error })    
            })
    ) });

    deleteUser$ = createEffect(() =>
        { return this.actions$.pipe(
            ofType(UserActions.deleteUser),
            pessimisticUpdate({
                run: (action) =>
                    this.userService
                        .delete(action.user)
                        .pipe(
                            map(() => UserActions.deleteUserSuccess({ user: action.user }))
                        ),
                    onError: (action, error) => UserActions.deleteUserFailed({ error })    
            })
        ) });    


    constructor(
        private actions$: Actions,
        private userService: StylingService
    ) {}    
}