import { createAction, props } from "@ngrx/store";
import {  User } from "@styling-app/api-interfaces";

// Select Entity

export const selectUser = createAction(
    '[User] Select User',
    props<{ userId: string }>()
);

// Load all Entities

export const loadUsers = createAction(
    '[User] Load Users'
);

export const loadUsersSuccess = createAction(
    '[User] Load Users Success',
    props<{ users: User[]}>()
);

export const loadUsersFailed = createAction(
    '[User] Load Users Failed',
    props<{ error: any }>()
);

// Load Single Entity

export const loadUser = createAction(
    '[User] Load User',
    props<{ userId: string}>()
);

export const loadUserSuccess = createAction(
    '[User] Load User Success',
    props<{ user: User}>()
);

export const loadUserFailed = createAction(
    '[User] Load User Failed',
    props<{ error: any}>()
);

// Load Create Entity

export const createUser = createAction(
    '[User] Create User',
    props<{ user: User}>()
);

export const createUserSuccess = createAction(
    '[User] Create User Success',
    props<{ user: User}>()
);

export const createUserFailed = createAction(
    '[User] Create User Failed',
    props<{ error: any}>()
);

// Load Update Entity

export const updateUser = createAction(
    '[User] Update User',
    props<{ user: User}>()
);

export const updateUserSuccess = createAction(
    '[User] Update User Success',
    props<{ user: User}>()
);

export const updateUserFailed = createAction(
    '[User] Create User Failed',
    props<{ error: any}>()
);

// Load Delete Entity

export const deleteUser = createAction(
    '[User] Delete User',
    props<{ user: User}>()
);

export const deleteUserSuccess = createAction(
    '[User] Delete User Success',
    props<{ user: User}>()
);

export const deleteUserFailed = createAction(
    '[User] Create User Failed',
    props<{ error: any}>()
);