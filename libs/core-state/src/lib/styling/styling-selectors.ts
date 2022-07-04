import { emptyUser } from "@styling-app/api-interfaces";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { userAdapter, UserState, USER_FEATURE_KEY } from "./styling-reducer";

export const selectUserState = createFeatureSelector<UserState>(USER_FEATURE_KEY);

const { selectAll, selectEntities } = userAdapter.getSelectors();

export const selectUsersLoaded = createSelector(
    selectUserState,
    (state: UserState) => state.loaded
);

export const selectUserError = createSelector(
    selectUserState,
    (state: UserState) => state.error
);

export const selectAllUsers = createSelector(
    selectUserState,
    (state: UserState) => selectAll(state)
);

export const selectUserEntities = createSelector(
    selectUserState,
    (state: UserState) => selectEntities(state)
);

export const selectSelectedUserId = createSelector(
    selectUserState,
    (state: UserState) => state.selectedId
);

export const selectSelectedUser = createSelector(
    selectUserEntities,
    selectSelectedUserId,
    (entities, selectedId) => (selectedId && entities[selectedId]) || emptyUser
);