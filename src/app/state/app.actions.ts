import { Credentials, User, FlashMessage } from '@app/models';
import { Action } from '@ngrx/store';

export enum AppActionTypes {
  Login = '[App] Login',
  LoginFail = '[App] Login Fail',
  LoginSuccess = '[App] Login Success',
  Logout = '[App] Logout',
  ShowFlashMessage = '[App] Show Flash Message',
  ClearFlashMessage = '[App] Clear Flash Message'
}

export class Login implements Action {
  readonly type = AppActionTypes.Login;

  constructor(public payload: Credentials) { }
}

export class LoginSuccess implements Action {
  readonly type = AppActionTypes.LoginSuccess;

  constructor(public payload: User) { }
}

export class LoginFail implements Action {
  readonly type = AppActionTypes.LoginFail;

  constructor(public payload: string) { }
}

export class Logout implements Action {
  readonly type = AppActionTypes.Logout;
}

export class ShowFlashMessage implements Action {
  readonly type = AppActionTypes.ShowFlashMessage;

  constructor(public payload: FlashMessage) { }
}

export class ClearFlashMessage implements Action {
  readonly type = AppActionTypes.ClearFlashMessage;

  constructor(public payload: FlashMessage) { }
}

export type AppActions = Login
  | LoginSuccess
  | LoginFail
  | Logout
  | ShowFlashMessage
  | ClearFlashMessage;
