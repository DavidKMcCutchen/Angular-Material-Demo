import { User } from "@styling-app/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as UserActions from './styling-actions';

export const USER_FEATURE_KEY = 'user';

export interface UserState extends EntityState<User> {
    selectedId?: string | number;
    loaded: boolean;
    error?: string | null;
};

export interface UserPartialState {
    readonly [USER_FEATURE_KEY]: UserState
};

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>({ selectId: (a) => a.id});

export const initialUserState: UserState = userAdapter.getInitialState(
    {
        loaded: false
    }
);

const onFailed = (state: any, { error }: any): UserState => ({ ...state, error});

const onDispatch = (state: any, action: any): UserState => ({
    ...state,
    loaded: false,
    error: null
});

const _userReducer = createReducer(
    initialUserState,
    on(
        UserActions.loadUserFailed,
        UserActions.loadUsersFailed,
        UserActions.createUserFailed,
        UserActions.updateUserFailed,
        UserActions.deleteUserFailed,
        onFailed
    ),
    on(
        UserActions.loadUser,
        UserActions.loadUsers,
        UserActions.createUser,
        UserActions.updateUser,
        UserActions.deleteUser,
        onDispatch
    ),
    on(
        UserActions.loadUserSuccess, (state, { user }) =>
        userAdapter.upsertOne(user, {...state, loaded: true})
    ),
    on(
        UserActions.selectUser, (state, { userId }) => ({
            ...state,
            selectedId: userId
        })
    ),
    on(
        UserActions.loadUsersSuccess, (state, { users }) =>
        userAdapter.setAll(users, {...state, loaded: true})
    ),
    on(
        UserActions.deleteUserSuccess, (state, { user }) =>
        userAdapter.removeOne(user.id, {...state, loaded: true})
    ),
    on(
        UserActions.updateUserSuccess, (state, { user }) =>
        userAdapter.updateOne(
            {id: user.id, changes: user},
            {...state, loaded: true}
        )
    ),
    on(
        UserActions.createUserSuccess, (state, {user }) =>
        userAdapter.addOne(user, {...state, loaded: true})
    ),
)

export function userReducer(
    state: UserState | undefined,
    action: Action
) {
    return _userReducer(state, action)
}