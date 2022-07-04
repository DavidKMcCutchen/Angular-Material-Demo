import { Injectable } from "@angular/core";
import { User } from "@styling-app/api-interfaces";
import { Action, ActionsSubject, Store } from "@ngrx/store";
import { map, filter } from "rxjs/operators";
import * as UserActions from './styling-actions';
import * as UserSelectors from './styling-selectors';
import * as fromUsers from './styling-reducer';


@Injectable({
    providedIn: 'root'
})

export class UserFacade {
    allUsers$ = this.store.pipe(
        map((state) => UserSelectors.selectAllUsers(state)),
    )
    selectedUsers$ = this.store.select((UserSelectors.selectSelectedUser));
    loaded$ = this.store.select((UserSelectors.selectUsersLoaded));

    mutations$ = this.actions$.pipe(
        filter((action: Action) =>
        action.type === UserActions.createUser({} as any) .type ||
        action.type === UserActions.updateUser({} as any) .type ||
        action.type === UserActions.deleteUser({} as any) .type 
        ))

        selectUser(userId: string) {
            this.dispatch(UserActions.selectUser({ userId }));
        };

        loadUsers() {
            this.dispatch(UserActions.loadUsers())
        };

        loadUser(userId: string) {
            this.dispatch(UserActions.loadUser({ userId }))
        };

        saveUser(user: User) {
            user.id ? this.updateUser(user) : this.createUser(user)
        };

        createUser(user: User) {
            this.dispatch(UserActions.createUser({ user }))
        };

        updateUser(user: User) {
            this.dispatch(UserActions.updateUser({ user }))
        };

        deleteUser(user: User) {
            this.dispatch(UserActions.deleteUser({ user }))
        };

        dispatch(action: Action) {
            this.store.dispatch(action)
        };

        constructor(
            private store: Store<fromUsers.UserPartialState>,
            private actions$: ActionsSubject
        ) {}
}