import { ActionReducerMap } from "@ngrx/store";
import * as fromUser from './styling/styling-reducer';
import * as fromAuth from './auth/auth.reducer';

export interface AppState {
    [fromUser.USER_FEATURE_KEY]: fromUser.UserState;
    [fromAuth.AUTH_FEATURE_KEY]: fromAuth.FeaturesAuthState
};

export const reducers: ActionReducerMap<AppState> = {
    [fromUser.USER_FEATURE_KEY]: fromUser.userReducer,
    [fromAuth.AUTH_FEATURE_KEY]: fromAuth.authReducer
};