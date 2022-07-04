import { Injectable } from '@angular/core';
import { NotificationsService } from '@styling-app/core-data';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as UserActions from './styling-actions';

@Injectable({
  providedIn: 'root',
})
export class NotificationEffects {
  createSuccessNotification$ = createEffect(
    () =>
      { return this.actions$.pipe(
        ofType(UserActions.createUserSuccess),
        tap(() => this.notificationService.notify('Create User Successful'))
      ) },
    { dispatch: false }
  );

  updateSuccessNotification$ = createEffect(
    () =>
      { return this.actions$.pipe(
        ofType(UserActions.updateUserSuccess),
        tap(() => this.notificationService.notify('Update User Successful'))
      ) },
    { dispatch: false }
  );

  deleteSuccessNotification$ = createEffect(
    () =>
      { return this.actions$.pipe(
        ofType(UserActions.deleteUserSuccess),
        tap(() => this.notificationService.notify('Delete User Successful'))
      ) },
    { dispatch: false }
  );

  loadAllSuccessNotification$ = createEffect(
    () =>
      { return this.actions$.pipe(
        ofType(UserActions.loadUsersSuccess),
        tap(() => this.notificationService.notify('Load Users Successful'))
      ) },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private notificationService: NotificationsService
  ) {}
}
